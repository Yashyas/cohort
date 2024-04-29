const express = require("express");
const zod = require("zod");
const app = express();

// schema input should be an array of number 
// const schema =zod.array(zod.number());

// schema of email,password,country and array kidney is created 
const schema = zod.object({
    email:zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json());

app.post("/",function(req,res){
    const bodyText = req.body;

    const response = schema.safeParse(bodyText)
    
    if(!response.success){
        res.status(411).json({
            msg:"Invalid output"
        })
    }else{
        res.send({
            response
            // input : {
    // "email" : "as@gmail.com",
    // "password" : "pass1234",
    // "country" : "IN",
    // "kidneys" : [1,2]
    //    }

            // output: {"response":{"success":true,"data":[1,2]}}
        });
    }
    
});

app.listen(3000);