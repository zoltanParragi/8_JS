// Set ---------
console.log("Set")
const mySet = new Set(['hó', 'eső', 'jég'])

mySet.add('zúzmara')
console.log(mySet)

mySet.delete('jég')
console.log(mySet)

mySet.forEach(e => {
    console.log(e)
})

console.log(mySet.size)

console.log(mySet.has("hó"))

console.log(mySet.values())
let text = "";

for(const elem of mySet.values()) {
    text += elem + ", " 
}
console.log(text)

// Map -----------
console.log("Map")
const myMap = new Map([
    ["alma", 500],
    ["banán", 600],
    ["körte", 800]
])
console.log(myMap);

myMap.set("szőlő", 1200)

console.log(myMap);
console.log(myMap.get("banán"));
console.log(myMap.size);
console.log(myMap.has('alma'));

myMap.delete("körte")
console.log(myMap)

console.log(".entries()");
console.log(myMap.entries());
let gyumik = ""

for(const gyum of myMap.entries()) {
    console.log(gyum)
    gyumik += gyum[0] + " ára: " + gyum[1] + ", "
}

console.log(gyumik)

console.log("forEach")
myMap.forEach(element => {
    console.log(element)
})
