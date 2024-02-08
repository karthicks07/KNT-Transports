const express=require('express')
var mdb=require('mongoose')
var cors=require('cors')
var bodyParser = require('body-parser')
var User=require('./models/signup')
const app=express()
const allowedOrigin=["http://karthicksenthil.vercel.app"]
app.use(
    cors({
        origin:allowedOrigin,
        credentials:true,
        methods:["GET","POST"]
    })
)
mdb.connect("mongodb+srv://karthicksenthil:karthicksenthil@mern.j9dloyt.mongodb.net/KNT",{useNewUrlParser:true, useUnifiedTopology:true})
var db=mdb.connection;
db.once('open',function()
{
    console.log("Connected to MongoDB")
})
app.get("/",(req,res)=>{
    res.send("Backend is working")
})
app.use(bodyParser.json())
app.post("/signup",async (req,res)=>{
    var { name, email, phone, password } = req.body;
        const Signup = await new User({
          name: name,
          email: email,
          phone: phone,
          password: password,
        });
        Signup.save().then(() => {
          console.log("User Added");
        });
        res.json({ message: "User Added" });

})

app.post("/login", async (req, res) => {
  
    try {
      var { email, password } = req.body;
    var existingUser = await User.findOne({email:email})
    if (existingUser){
      if (password === existingUser.password){
          return res.json({loggedIn:true,message:"Login Successful"})

      }
      else {
          return res.json({loggedIn:false,message:"Invalid Credentials"})
      }
    }
    else{
      return res.json({loggedIn:false,message:"User Does not exists"})
    }
    } catch (error) {
      console.log(error);
      return res.json({loggedIn:false,message:"Internal Server Error"})
    }
  });
app.listen(3001)
// const newSignup=new Signup({
//     name:"karthick",
//     email:"karthick@gmail.com",
//     phone:"6381145567",
//     password:"123"
// })


// newSignup.save().then(()=> console.log("Signup Created"))
// .catch(()=> console.log("Signup failed"))
// app.listen(3001)

// const newLogin=new Login({
    //     name:"Karthick",
    //     email:"kaaaaaaarthick712004@gmail.com",
    //     password:"k@rthicck"
    // })
// newLogin.save().then(()=> console.log("Loign Created"))
// .catch(()=> console.log("Login failed"))
