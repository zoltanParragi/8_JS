let text ="info@fgh.com"
let pattern = /^([a-z]+)@([a-z]+)\.[a-z]{2,4}$/

console.log(pattern.test(text))

//Készítsünk egy kisbetűs szöveges formátum ellenőrzésére szolgáló kifejezést.
const text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,"
const pattern2 = /[A-Z]/g

console.log("The text contains only lowercase characters: " + !pattern2.test(text2))

//Készítsünk egy numerikus formátum ellenőrzésére szolgáló kifejezést.
const text3 = "345.45k5"
const pattern3 = /[^0-9]/g

console.log("The text contains only numbers: " + !pattern3.test(text3))

//Készítsünk egy magyar, mobil telefonszám formátum ellenőrzésére szolgáló kifejezést.
const phone = "+36513467896"
const pattern4 = /^[+36]/
console.log("It is a valid hungarian phone number: " + pattern4.test(phone));