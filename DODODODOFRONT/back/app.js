const path = require("path");
const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./routes")

const app = express();
app.set('port', process.env.PORT || 8001);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.send("ok");
});

app.use('/test',indexRouter);
app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error); 
  });


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });