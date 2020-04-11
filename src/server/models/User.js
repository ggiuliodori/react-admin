//ver si para mysql necesito hacer models como en mongoose..

const mysql = require('mysql');


const UserLoginSchema = mysql.Schema({
    user:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
});

module.exports=mysql.model('userlogin',UserLoginSchema);