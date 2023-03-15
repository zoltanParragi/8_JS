// encapsulation, getters, setters
console.log("encapsulation, getters, setters: ")

class Person {
    _fname
    _lname

    constructor(f, l) {
        this.fname = f
        this.lname = l
    }

    firstLetterToUppercase(text) {
        const firstLetter =text[0].toUpperCase()
        return firstLetter + text.substr(1, text.length-1)
    }

    set fname(f) {
        this._fname = this.firstLetterToUppercase(f.toLowerCase())
    }

    set lname(l) {
        this._lname = this.firstLetterToUppercase(l.toLowerCase())
    }

    get fname() {
        return "A vezeték név: " + this._fname + ". "
    }

    get lname() {
        return "A keresztnév: " + this._lname + ". "
    }

    fullname() {
        return `${this.fname} ${this.lname}`
    }

    static doubleIt(num) {
        return num*2
    }
}

const user = new Person("VégH", "jóZsef")
console.log(user.fullname())
console.log(user.fname)

//static method
console.log("static method:")

console.log(Person.doubleIt(2.34))

//json format from an object
console.log("json format:")

console.log(JSON.stringify(user))

const user2inJSON = '{"_fname": "Nagy", "_lname": "Béla"}'

console.log(JSON.parse(user2inJSON))

// fetch
console.log("fetch:")

const result = fetch('https://jsonplaceholder.typicode.com/users')
console.log(result) // it gives back a promise, no requested data in it

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> console.log(response)) // it gives back response object, no requested data in it

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())  // making a variable here and convert it in json format
    .then(res => console.log(res)) // here the res is not in json format, it is an object or an array

