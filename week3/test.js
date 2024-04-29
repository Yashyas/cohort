const express =require("express")
const app = express()


var users = [{
    name:"jhon",
    kidney:[{healthy: false},
        {healthy: true}]
}]

app.get("/",function(req,res){
    const kidneyJhon =users[0].kidney;
    const numKidney =kidneyJhon.length;
    let healthyKidney = 0;
    let failKidney = 0;
    console.log(kidneyJhon)
    for(let i=0;i<numKidney;i++){
        if(kidneyJhon[i].healthy){
            healthyKidney++;
        }else{
            failKidney++;
        }
    }
    // res.send("Number of Kidney:"+ numKidney + " Healthy Kidney:" + healthyKidney + " Unhealthy Kidney:" + failKidney)
    res.json({
            numKidney,
            healthyKidney,
            failKidney
    })
})

// to use in memeory we have to write this line 
app.use(express.json());

app.post("/",function(req,res){
    const Health = req.body.Health;
    users[0].kidney.push({
        healthy: Health
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy true;
    }
    res.send("Kidney cured")
})

app.delete("/",function(req,res){
    
})

app.listen(3000);