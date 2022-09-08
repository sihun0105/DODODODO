const path = require("path");
const express = require("express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
const authRouter = require('./routes/auth');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
passportConfig(); // 패스포트 설정
app.set('port', process.env.PORT || 8001);
/**시퀄라이즈 사용하여 db 테이블 없을시 자동 생성,  */
sequelize.sync({ force: false }) 
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());



const users = {};
const jwtSecret = "JWT_SECRET";

app.use('/auth', authRouter);
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "토큰이 없습니다." });
  }
  try {
    const data = jwt.verify(
      req.headers.authorization.replace("Bearer ", ""),
      jwtSecret
    );
    res.locals.email = data.email;
  } catch (error) {
    console.error(error);
    if (error.name === "TokenExpiredError") {
      return res
        .status(419)
        .json({ message: "만료된 액세스 토큰입니다.", code: "expired" });
    }
    return res
      .status(401)
      .json({ message: "유효하지 않은 액세스 토큰입니다." });
  }
  next();
};
  app.get("/",(req,res,next) => {
    res.send('asdads');
  })
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
        // if (req.body.email) {
        //   return res.status(401).json({ message: "가입하지 않은 회원입니다." });
        // }
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
      
      app.post("/logout", verifyToken, (req, res, next) => {
        delete users[res.locals.email];
        res.json({ message: "ok" });
      });

      app.use((req, res, next) => {
        const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
        error.status = 404;
        next(error); 
      });      
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});