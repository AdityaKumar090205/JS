const userEmail = []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("No user email");
}

// falsy values

//  false, 0 , -0, BigInt 0n, "", null ,undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined 

val1 = 10
// val1 = 10 ?? 15
// val1 = null ?? 5
// val1 = undefined ?? 20 ?? 10
// val1 = undefined ?? 10 ?? 20

console.log(val1);

//Terniary Operator

// condition ? true : false

const productPrice = 100
productPrice <=50 ? console.log("Lesser than 50") : console.log("Greater than 50")

