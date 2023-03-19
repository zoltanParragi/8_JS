// IIFE
(function(param){
    console.log(param);
}("IIFE"))

/*  Ezek is működnek, de nem futnak mindig együtt ...
    kívül van a () vagy belül van a () ...

(function(){
    console.log("IIFE2");
})()

(()=>{
    console.log("IIFE3");
})() 

*/

const a = (function(param){
    console.log(param)
})
a("IIFE4")

//Objects as parameters

const funcWithObjParam = ({a, b, c}) => {
    console.log(a + b + c)
}
funcWithObjParam({a: 20, b: 30, c: 40});

const funcWithObjParam2 = (param) => {
    console.log(param.a + param.b + param.c)
}
funcWithObjParam({a: 30, b: 40, c: 50});

const funcWithObjParam3 = (param) => {
    const {a, b, c} = param
    console.log(param.a + param.b + param.c)
}
funcWithObjParam({a: 40, b: 50, c: 60});

// it works similarly: const [item, setItem] = useState(null)

//events:
document.querySelectorAll('button')[0].onclick = function() {
    alert("function 1")
}
document.querySelectorAll('button')[0].onclick = function() {
    alert("function 2")
}
document.querySelectorAll('button')[0].onclick = function() {
    alert("function 3")
}

document.querySelectorAll('button')[1].addEventListener('click', ()=> {
    alert("function 1")
})

function eventHandler2() {
    alert("function 2")
}
document.querySelectorAll('button')[1].addEventListener('click', eventHandler2)

function eventHandler3() {
    alert("function 3")
}
document.querySelectorAll('button')[1].addEventListener('click', eventHandler3)

document.querySelectorAll('button')[1].removeEventListener('click', eventHandler2)



