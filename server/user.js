const express = require('express')
const router = express.Router()
const User = require('./model')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const secret = 'authentication_code';


router.use(bodyParser.json())

router.post('/login',function(req,res){
    const username = req.body.username
    const password = req.body.password
    User.find({username,password},function(err,doc){
        if(username.length || password.length=== 0){
            return res.json({code:1,msg:'Credentials is not correct'})
        } else {
            const payload = { username };
            const token = jwt.sign(payload, secret, {
              expiresIn: '2h'
            });
            res.cookie('token', token, { httpOnly: true })
              .sendStatus(200);
            return res.json({code:0,msg:'log in success'})
        }
    })
})

router.get('/users',function(req,res){
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1,msg:'Please sign in'})
    }
    User.findOne({_id:userid},function(err,doc){
        if(err){
            return res.json({code:1,msg:'Credentials is not correct'})
        }
    })
    if (doc){
        return res.json({code:0,data:doc})
    }
})


module.exports = router