const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware');

const app = express()
app.use(cookieParser());
app.use(bodyParser.json())
app.use('/',userRouter)

app.get('/anthenticRoute', withAuth, function(req, res) {
    res.sendStatus(200);
  }
)

app.listen(8000,function(){
    console.log('Node app start at port 8000')
})