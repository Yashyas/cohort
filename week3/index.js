// initializing express server 
const express = require("express");
const port = 3000
const app = express();

// whenevver '/' directory is called it would execute the function 
app.get('/',function(req,res){

    // taking input from querry 
    const a = req.query.a;
    res.send("Hello World,sun na b!"+a)
})
// starts listening on the port 
app.listen(port)
// run node index.js 
// npx nodemon index.js used for making server start automatically whenever we save changes
// go to localhost:3000 