const user = {
    username: "aditya",
    price: 100,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function check(){
//     let username = "ak"
//     console.log(this.username);
    
// }

// check()

// const check = function(){
//     let username = "ak"
//     console.log(this.username);
// }

const check = () => {
    let username = "ak"
    console.log(this);
}

// check()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "ak"})

console.log(addTwo(5,6));
