//data type conversion
let a = 4 + 5 + "alma"
console.log(a);

let b = "alma" + 4 + 5
console.log(b);


let c = 'It\'s awesome!'
console.log(c);

//line break

let d = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
 Soluta consequuntur ab, fuga iure expedita maiores nihil impedit\
 esse id beatae in voluptatem aspernatur, odio enim, neque reiciendis.\
  Perspiciatis, atque animi!"
console.log(d)

let e = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 Soluta consequuntur ab, fuga iure expedita maiores nihil impedit
 esse id beatae in voluptatem aspernatur, odio enim, neque reiciendis.
  Perspiciatis, atque animi!`
console.log(e)

let f = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."+
 "Soluta consequuntur ab, fuga iure expedita maiores nihil impedit."+
 "esse id beatae in voluptatem aspernatur, odio enim, neque reiciendis."
console.log(f)

//string iteration
let g = "Lorem, ipsum"
for(letter of g) {
    console.log(letter)
}

let h = "Lorem, ipsum"
for(let letter in h) {
    console.log(h[letter])
}

let name = "DeclarationXP"
let velocity = 17500
let distanceFromTheMars = 225000000
let distanceFromTheMoon = 384400
console.log(typeof name + " " + typeof velocity + " " + typeof distanceFromTheMars + " " + typeof distanceFromTheMoon)
let daysToMars = (distanceFromTheMars / (velocity*3.6))/24
console.log(daysToMars);
let hoursToMoon = (distanceFromTheMoon / (velocity*3.6))
console.log(hoursToMoon);

const spaceShuttle = {
    name: "DeclarationXP",
    velocity: 17500,
    distanceFromTheMars: 225000000,
    distanceFromTheMoon: 384400,
    daysToMars: function() {
        return (this.distanceFromTheMars / (this.velocity*3.6))/24
    },
    hoursToMoon: function() {
        return this.distanceFromTheMoon / (this.velocity*3.6)
    }
}

console.log(spaceShuttle.daysToMars())
console.log(spaceShuttle.hoursToMoon())
for(let attr in spaceShuttle) {
    console.log(attr)
    console.log(spaceShuttle[attr])
}



