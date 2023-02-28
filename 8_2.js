const add = function(n1, n2) {
    return n1 + n2
}

console.log(add(7, 8))

const arrowMultiply = (a, b) => {
    return a*b
}

console.log(arrowMultiply(4, 3))

// with 1 parameter, 1 statement
//no brackets, no curly braces
const arrow2times = x => x*2

console.log(arrow2times(7))

// this

const funcA = function() {
    console.log(this)
}
funcA()

const arrA = () => {
    console.log(this)
}
arrA()

document.querySelector("button:first-of-type").onclick = function() {
    console.log(this)
    this.style.background = "yellow"
}

document.querySelector("button:nth-child(3)").onclick = () => {
    console.log(this)
}

document.querySelector("button:nth-child(4)").onclick = (e) => {
    e.target.style.background = "red"
    console.log(e.target)
}

//class without constructor
class Person {
    fname
    lname
    fullname() {
        return `${this.fname} ${this.lname}`
    }
}

const user = new Person
user.fname = "Kiss"
user.lname = "Béla"
console.log(user.fullname())

//class with constructor
class PersonWithConstructor {
    constructor(f, l) {
        this.fname = f
        this.lname = l
    }
    fullname() {
        return `${this.fname} ${this.lname}`
    }
}

const user2 = new PersonWithConstructor('Nagy', 'János')
console.log(user2.fullname())

// object destructoring
const {fname, lname} = user2
console.log("destructored variables: fname - " + fname +" lname - " + lname )