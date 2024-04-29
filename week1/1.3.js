function out(a){
    console.log(a);
}
// length of str 
let str = "four five";
console.log("length:"+str.length);

// find index
console.log("Index:"+str.indexOf('five'));

// find last index 
out(str.lastIndexOf('f'))

// divide string 
out(str.slice(0,7))

// replace string 
out(str.replace("four","super"));

// split string 
out(str.split(""));

// output: [
//     'f', 'o', 'u',
//     'r', ' ', 'f',
//     'i', 'v', 'e'
//   ]

// trim extra space fromm beginning and end.
let str1 = "  jk02 junun mein bhara jk02    "
let str2 = "  jk02 junun mein bhara jk02    "
out(str1)
out(str2.trim())

// array 
let arr =[1,2,3,4,5,6,7];
arr.push(100)
out(arr)
arr.pop(100)
out(arr)
arr.unshift(100)
out(arr)
arr.shift(100)
out(arr)

// concat array 
let arr2 = ["hello", "world"]
out(arr.concat(arr2))

// for each 
arr.forEach(element => {
    out(element)
});

// JSON 
const user ={
    name:"Yash",
    age:"21",
    gender:"Male"
}
// convert object into string 
const stry = JSON.stringify(user) 
out(stry)
// convert string into object 
const conver =JSON.parse(stry)
out(conver)