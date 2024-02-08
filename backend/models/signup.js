var mdb=require('mongoose')

const signupScehema=new mdb.Schema(
    {
        name:{type:String},
        email:{type:String,unique:true},
        phone:{type:String},
        password:{type:String},
    }
)
const signup_module=mdb.model('user',signupScehema)
module.exports=signup_module