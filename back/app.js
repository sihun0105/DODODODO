const path = require("path");
const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./routes");
const jwt = require("jsonwebtoken");

const app = express();
app.set('port', process.env.PORT || 8001);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const users = {};
const jwtSecret = "JWT_SECRET";
app.get('/',(req,res) => {
    res.send("ok"); 
});

app.use('/test',indexRouter);

  
  app.post("/user", (req, res, next) => {
  if (users[req.body.email]) {
          return res.status(401).json({ message: "이미 가입한 회원입니다." });
        }
        users[req.body.email] = {
          email: req.body.email.toLowerCase(),
          password: req.body.password,
          name: req.body.name,
        };
      
        return res.json({
          data: {
            email: req.body.email,
            name: req.body.name,
          },
        });
      });

      app.post("/login", (req, res, next) => {
        console.log('asdsads');
        if (!users[req.body.email]) {
          return res.status(401).json({ message: "가입하지 않은 회원입니다." });
        }
        if (req.body.password !== users[req.body.email].password) {
          return res.status(401).json({ message: "잘못된 비밀번호입니다." });
        }
        const refreshToken = jwt.sign(
          { sub: "refresh", email: req.body.email },
          jwtSecret,
          { expiresIn: "24h" }
        );
        const accessToken = jwt.sign(
          { sub: "access", email: req.body.email },
          jwtSecret,
          { expiresIn: "5m" }
        );
        users[req.body.email].refreshToken = refreshToken;
        return res.json({
          data: {
            name: users[req.body.email].name,
            email: req.body.email,
            refreshToken,
            accessToken,
          },
        });
      });

      app.use((req, res, next) => {
        const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
        error.status = 404;
        next(error); 
      });      
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});