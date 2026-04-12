const score = 100
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.9876
//console.log(otherNumber.toPrecision(3));

const hundreds = 10000000000
//console.log(hundreds.toLocaleString("en-IN"));

//+++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-90));
// console.log(Math.round(9.8));
// console.log(Math.ceil(8.1));
// console.log(Math.floor(8.9));
// console.log(Math.min(9,8,6,4,1));
// console.log(Math.max(89,654,6543,9867,9895));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 40
const max = 50

//Very important add one to avoid 0 and max,min to get within range
console.log(Math.floor(Math.random()*(max-min+1)) + min);
