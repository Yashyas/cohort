const express = require("express")
const jwt = require("jsonwebtoken");
const jwtPass = "12345" ;

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "yash",
        password: "123",
        name: "Yash mishra"
    },
    {
        username: "yash2",
        password: "1234",
        name: "Yash mishra2" 
    },
    {
        username: "yash3",
        password: "1235",
        name: "Yash mishra3"
    },
];

function userExists(username,password){
    let validUser = false;
    ALL_USERS.find(function (user){
        if(user.username === username && user.password === password){
            validUser = true;
            return true;
        }
    });
    return validUser;
}

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password =req.body.password;

    if(!userExists(username,password)){
         return res.status(403).json({
            msg:"User doenst exist in our in memory db",
         });
    }else{
        // try {
        //     var token = jwt.sign({ username: username }, jwtPass);
        //     return res.json({
        //         token,
        //     });
        // } catch (error) {
        //     console.error("Error signing JWT:", error);
        //     return res.status(500).json({ msg: "Error signing JWT" });
        // }
        var token = jwt.sign({ username: username }, jwtPass);
            return res.json({
                token,
            });
    }
});

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPass);
        const username = decoded.username;
        res.json({
            user: ALL_USERS.filter(function(value){
                if(value.username === username){
                    return false
                }else{
                    return true;
                }
            })
        })
    }catch (err){
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

// global caches for error 
app.use(function(err,req,res,next){
    res.json({
        msg:"Error occured",
    });
})


app.listen(3000);

