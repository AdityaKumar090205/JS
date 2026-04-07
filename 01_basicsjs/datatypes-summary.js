//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 30
const scoreValue =30.3

const isLoggedIn = false
const outsideTemp = null
let accountEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const BigNumber = 3685824619747474n

// Reference(Non-Primitive)

//Array, Objects, Functions

const heroes=["spiderman","batman","ironman"];
let myObj = {
    name: "aditya",
    age: 21,
}

const Myfunction = function(){
    console.log("Hello world");
}

console.log(typeof id);

//+++++++++++++++++++++++++++++++++++++++++++

//Memory

// Stack (Primitive), Heap (Non-primitive)

let MyYoutubeName = "Akanimelover07"
let anothername = MyYoutubeName
anothername = "adityakumardotcom"

console.log(MyYoutubeName);
console.log(anothername);

let userOne= {
    email: "aditya@gmail.com",
    upid: "ak@ybl"
}

let userTwo = userOne

userTwo.email = "ak@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



