const arr0 = ["a", "b", "c"]
const x = arr0.findIndex(e => e === "a")
console.log(x)

const arr = [
    {
        id: 0,
        name: "aaa",
        age: 14
    },
    {
        id: 1,
        name: "bbb",
        age: 27
    },
    {
        id: 2,
        name: "ccc",
        age: 102
    },
]

const index = arr.findIndex( e => e.id === 2)
console.log(index);

const index2= arr.findIndex( e => e.id === 1)
arr[index2].name = "Béla"
console.log(arr[index2].name);

const d = new Date();
console.log(d);
const dLocal = d.toLocaleString('hu-HU', {
    "year": "numeric",
    "month": "long",
    "day": "2-digit",
    "hour": "2-digit",
    "minute": "2-digit",
    "second": "2-digit"
})
console.log(dLocal);

const d2 = d.toDateString()
console.log(d2)

const d3 = d.toTimeString()
console.log(d3)

//const d4 = new Date(year, month, day, hours, minutes, seconds, milliseconds)
const d4 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d4);
console.log(d4.toString())

// loops
const obj = {a: "alma", b: "bálna", c: "calma"}
const str = "string"
const myArr = ["anna", "csaba", "béla"]
for(let key in obj) {
    console.log(key)
}
for(let key in str) {
    console.log(key)
}
for(let key in myArr) {
    console.log(myArr[key])
}

for(let x of str) {
    console.log(x)
}

for(let x of myArr) {
    console.log(x)
}

