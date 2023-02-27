// variable lift/hoisting
//#1
x = 3;
console.log(x);
var x; // it does not work with let

//#2 JavaScript variable declarations will only increase, not initialized.

let y = 5
let z = 7
console.log(y +" + "+ z)

let a = 5
console.log(a +" + "+ b)
var b = 7 // does not work with let

let c = 5
let d
console.log(c +" + "+ d)
d = 7

//#3 priority of function body
let f = 11
if(true) {
    console.log(f) //f = 11
}

let g = 11
if(true) {
    let g = 21
    console.log(g) //g = 21
}

// cannot be executed:
/* let e = 11 
if(true) {
    console.log(e) //js wants to read the value e from the closure but it is not declared yet -> ERROR
    let e = 21
    console.log(e)
} */


//branches: if, switch
// no overlap:
let h = 2;
switch(h) {
    case 1:
        console.log(1+" with switch");
    break;
    case 2:
        console.log(2+" with switch");
    break;
    case 3:
        console.log(3+" with switch");
    break;
    default:
        console.log("something"+" with switch");
    break;
}
if(h===1) { //the same as previous switch
    console.log(1+" with if");
} else if (h===2) {
    console.log(2+" with if");
} else if (h===3) {
    console.log(3+" with if");
} else {
    console.log("something"+" with if");
}

//overlap
let i = 8;
switch(true) {
    case i<5:
        console.log("smaller than 5, switch");
    case i<9:
        console.log("smaller than 9, switch");
    case i<15:
        console.log("smaller than 15, switch");
    default:
        console.log("smaller than infinity, switch");
}

if(i<5) {
    console.log("smaller than 5, if");
}
if(i<9) {
    console.log("smaller than 9, if");
}
if(i<15) {
    console.log("smaller than 15, if");
}
if(i<Infinity) {
    console.log("smaller than infinity, if");
}

// loops
const arr = ["c", "v", "b", "n"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  
}

console.log("strings:");
let str = "alma"

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    
}

for (const iterator of str) {
    console.log(iterator);
}

const obj = {
    a: 1,
    b: 2,
    c: 3
} 

for (const key in obj) {
    console.log(key + ": " + obj[key])
}

console.log("arrays:")
const arr2 = [...Array(5).keys()]
arr2.forEach(e => {
    if(e % 2 === 1) {
        return
    }
    console.log("forEach(if): " + e )
})
arr2.filter(e => e % 2 === 1).forEach(e => {
    console.log("forEach(filter): " + e )
})

let j = 0;
while(true) {
    j++;
    if(j%3 !== 1){
        continue
    }
    console.log(j)
    if(j> 12) {
        break
    }
}


