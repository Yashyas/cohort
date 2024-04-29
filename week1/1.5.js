// async function file read 
const fs = require("fs");
// filesystem module 

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// })

// promise 
function ReadFile(){
    // banda promise kar rha ki phle isko solve karo fir jo ayega usko jo promise kiya tha uske paas vej dena 
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}


ReadFile().then(out);

// ek aur promise testinng ke liye 
function out(a){
    console.log(a);
}

function add(a,b){
    return new Promise(function(result){
        let data = a+b;
        result(data);
    });
}
add(10,20).then(out);

// async await 
// await can only be used inside an async function 
async function main(){
    let val = await add(10,10);
    out(val);
}
main()