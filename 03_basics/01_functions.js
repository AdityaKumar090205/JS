
function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let res = number1 + number2
    // return res
    return number1 + number2
}
const res = addTwoNumbers(3,null)

// console.log("Result:", res);

function loginUserMsg(username = "sam"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("ak"));


function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    uername: "ak",
    price: 98
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 99
})

const newArray = [100, 200, 300, 400, 500]

function returnFirstValue(anarray){
    return anarray[0]
}

// console.log(returnFirstValue(newArray));
console.log(returnFirstValue([8100,2800,7900]));
