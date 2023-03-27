//this
console.log(this)

function thisTest() {
    return this
}

console.log(thisTest())

class ThisClass {
    _location
    constructor(fn, ln) {
        this.fname = fn,
        this. lname = ln
    }
    get location() {
        return this._location.toUpperCase()
    }

    set location(l) {
        this._location = l.toLowerCase()
    }
    
    fullName() {
        return this.fname + " " + this.lname
    }
}

const bela = new ThisClass("Béla", "Smith")
bela.location = "viNdorNyaszőlőS"
console.log(bela)
console.log(bela.location)

// another this and object example - setter is used in the constructor
class AnotherThisClass {
    _result
    constructor(a, b, c) {
        this.result = a + b + c
    }
    get result() {
        return this._result
    }

    set result(x) {
        this._result = x
    }
}
const y = new AnotherThisClass(2, 3, 4)
console.log(y.result)

document.querySelector('button').addEventListener("click", function() {
    console.log(this)
})

document.querySelector('button').addEventListener("click", () => console.log(this))

document.querySelector('button').addEventListener("click", (e) => console.log(e.target))

const obj2 = {
    fname: "Béla",
    lname: "Smith",
    fullName: function() {
        return this.fname + " " + this.lname
    }
}

const obj1 = {
    fname: "József",
    lname: "Baker"
}

obj1.fullName = obj2.fullName.bind(obj1)
console.log(obj1.fullName())
//OR this way:
/* let fullName = obj2.fullName.bind(obj1)
console.log(fullName()) */

//modules
import ModuleClass, {colorIt, resizeIt, config as config2} from "./8_13_module.js"
import config from "./8_13_config.js"

const objFromModuleClass = new ModuleClass(7, 8, 9)
console.log(objFromModuleClass.result)

document.querySelector("#outputFromModuleClass").innerHTML = resizeIt("40px", colorIt("blue", objFromModuleClass.result))

console.log(config.publicUrl)

//with code destruction:
const { publicUrl, projectName } = config
console.log(projectName)

const { publicUrl2, projectName2 } = config2
console.log(publicUrl2 + " " + projectName2)

//json
const stringFromObj1 = JSON.stringify(obj1)
console.log(stringFromObj1);

const obj3 = {...JSON.parse(stringFromObj1)}
console.log(obj3)
