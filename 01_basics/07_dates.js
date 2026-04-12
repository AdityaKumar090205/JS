//Dates

let newDate = new Date()
// console.log(newDate.toString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleString());
// console.log(typeof newDate);


// let anotherDate = new Date(2026,9,27)
// let anotherDate = new Date(2026,9,27,8,30)
let anotherDate = new Date("4-29-2026")
// console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(anotherDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let oneDate = new Date()
console.log(oneDate);
console.log(oneDate.getMonth()+1);
console.log(oneDate.getDay());

oneDate.toLocaleString('default' ,{
    weekday: 'long',
    timeZone: '' 
})





