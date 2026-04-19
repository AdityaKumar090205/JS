// if

const isUserLoggedIn = true
const temperature = 40
// if (temperature>=40){
//     console.log("Lesser than 40");
// }
// else{
//     console.log("Greater than 40");
    
// }

// console.log("Execute");
// <, >, >=, <= , == , !=, ===, !==

const score = 300

// if(score>100){
//     const power = "superspeed"
//     console.log(`Super power: ${power}`);
// }

// console.log(`Super power: ${power}`);

// const balance = 1020

// if(balance>500) console.log("Balance sufficient"),console.log("Not used for normal practices or Companies");

// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance<800){
//     console.log("Less than 800");
// }
// else if(balance<1000){
//     console.log("Less than 1000");
// }
// else{
//     console.log("Less than 1500");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if(UserLoggedIn && debitCard){
    console.log("Allowed to shopping");    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Logged in");    
}
