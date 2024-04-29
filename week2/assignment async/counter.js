// // timer using setInterval
// let count = 0; 
// setInterval(function(){
//     count = count+1;
//     console.log("Count:"+count);
// },1000)

// // timer using setTimeout 
// function timer(duration){
//     const p = new Promise(function(resolve){
//         setTimeout(resolve,duration)
//         })
//         return p;
// }
// let count = 0;
// function counter(){
//             count += 1;
//             console.log("Count:"+count);
//             timer(1000).then(counter)
    
// }
// timer(1000).then(counter)


// // file read using fs using promise 

// function read(file){
//     const p = new Promise(function(resolve){
//         const fs = require("fs");
//         fs.readFile(file,"utf-8",function(err,data){
//             resolve(data);
//         })
//     })
//     return p
// }
// // not needed can be used like this -> read("b.txt").then(console.log);
// // function print(a){
// //     console.log(a);
// // }
// read("b.txt").then(console.log);

// // write file 

// function write(file,text){
//         const p = new Promise(function(resolve){
//             const fs = require("fs");
//             fs.appendFile(file,text,function(err){
//                 if(err) throw err;
//                 resolve("Updated");
//             })
//         })
//         return p
//     }
// write("b.txt","are bhai kar liya updated").then(console.log);


// // read a file ,remove all the extra spaces and write it back in to same file 

// function removeSpace(file){
// const p = new Promise(function(resolve){
//     const fs =require("fs");
//     fs.readFile(file,"utf-8",function(err,data){
//         let strArr = data.split("");
//         let spacedStr = "";
//         for(let i = 0; i< strArr.length;i++){
//             if(strArr[i]==" " && strArr[i-1]==" "){
//                 // console.log("double space");
//             }else{
//                 spacedStr = spacedStr + strArr[i];
//             }
//         }
//         fs.writeFile(file,spacedStr,function(err){
//             if(err) throw err;
//         })
//     })
//     resolve("Updated")  ;
// })
// return p;
// }
// removeSpace("b.txt").then(console.log);



// // testing time code from chatGPT

// function formatTime(date) {
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     // Add leading zeros if needed
//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;

//     // Determine AM/PM for 12-hour format
//     let ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // Handle midnight (0 hours)

//     // Combine both formats into a single string
//     let time24 = hours + ":" + minutes + ":" + seconds;
//     let time12 = hours + ":" + minutes + ":" + seconds + " " + ampm;
    
//     return "24-hour format: " + time24 + ", 12-hour format: " + time12;
// }

// function updateClock() {
//     // Clear the console
//     process.stdout.write('\x1b[2J\x1b[0f');
    
//     let date = new Date();
//     let timeString = formatTime(date);
//     console.log(timeString);
// }

// // Update the clock every second
// setInterval(updateClock, 1000);



// // Finaly completed the code myself 
// function time(present){
//     let hour = present.getHours();
//     let minute = present.getMinutes();
//     let second = present.getSeconds();
//     let ampm = "";
//     // time output 
//     if(hour < 12){
//         ampm = "AM";
//     }else{
//         ampm = "PM";
//     }
//     let time = hour + ":" + minute + ":" + second + " " + ampm;
//     return time;

// }
// function update(){
//     // Clear the console
//     process.stdout.write('\x1b[2J\x1b[0f');
//     let present = new Date();
//     let presentTime = time(present);
//     console.log(presentTime);
// } 
// setInterval(update,1000);


// sleep using promise 
function busyWait(milliseconds) {
    return new Promise(function(resolve){
        const startTime = Date.now();
        while (Date.now() < startTime + milliseconds) {
            // Busy wait
        }
        resolve();
    });
}

// Example usage:
console.log("Start");
busyWait(3000).then(function(){
    console.log("End");
});

