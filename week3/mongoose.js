const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://ym130602:qwert%4012345@cluster0.s1gfst8.mongodb.net/userappnew")

const User = mongoose.model('Users',{name : String,email : String,password : String});

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // findOne function is used to find existing user in database 
    const existingUser = await User.findOne({ email: username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    await User.create({
        name : name,
        email: username,
        password: password
    })
    // const user = new User({
    //     name: name,
    //     email:username,
    //     password: password
    // });
    
    // user.save();
    res.json({
        msg: "User Created",
    })

})

app.use(function(err,res,req){
    res.json({
        msg:"Error"
    })
})
app.listen(3000);
