const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/User'

mongoose.connect(DB_URL)

const Users= mongoose.model('login',new mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true}
}))


Users.create(
    {
    username:'ezra1',
    password:'ezra1'
},
{
    username:'ezra2',
    password:'ezra2'
},{
    username:'ezra3',
    password:'ezra3'
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
}
)



module.exports = Users
