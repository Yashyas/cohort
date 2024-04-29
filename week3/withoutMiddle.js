const express = require("express");
const app = express();

app.get('/',function(req,res){
    const username =req.headers.username;
    const password =req.headers.password;
    const kidneyId = req.query.kidneyId; 

    if(username === "yash"){
        if(password === "pass"){
                if(kidneyId != 1 && kidneyId != 2){
                    res.status(411).json ({
                        msg: "wrong inputs for kidney"
                    });
                    return;
                }else{
                    res.send("Your heart is healthy");
                }
        }else{
            res.status(403).json({
                msg:"Wrong password",
            });
        }
        return;
    }else{
        res.status(403).json({
            msg:"User doesn't exist",
        });
        return;
    }

})

app.listen(3000);