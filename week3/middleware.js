const express = require("express");
const app = express();

// middleware is used to verify user 
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username === "yash"){
        if(password === "pass"){
            next();
        }else{
            res.json({
                msg: "Invalid password",
            });
        }
    }else{
        res.json({
            msg: "Invalid user"
        });
    }
};

function kidneyMiddleware(req,res,next){
    const kidneyId = req.headers.kidney;
    if(kidneyId === "1" || kidneyId === "2"){
        next();
    }else{
        res.send("Kidney input is wrong");

    }
};

// userMiddleware is used for user verification 
app.get("/",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("Login Successfull")
})

// app.use automatically add the given middleware to all app.get  comming after it without the need of explicitly explaining in the app.get function.

app.use(userMiddleware);
app.use(kidneyMiddleware);

app.get("/test",function(req,res){
    res.send("Login Successfull")
})

app.get("/test1",function(req,res){
    res.send("Login Successfull")
})

// global catches -> always comes at end whenever error occurs then it comes down to it.
app.use(function(err,req,res,next){
    res.json({
        msg:"Error occured",
    });
})

 app.listen(3000);