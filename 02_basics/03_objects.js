// singleton
// Object.create

// Object Literals

const mysym = Symbol("key")

const JsUser = {
    name: "ak",
    "full name": "Aditya Kumar",
    [mysym]: "key1",
    age: 21,
    location: "Asansol",
    email: "ak@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Tuesday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "ak@google.com"
// Object.freeze(JsUser)
JsUser.email = "ak@microsoft.com"
// console.log(JsUser);

JsUser.greeting1 = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting1);
console.log(JsUser.greeting2());





