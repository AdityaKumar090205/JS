//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("Got number 5");
    }
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value is: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myHeroes = ["spiderman","ironman","thor"]

for (let i = 0; i < myHeroes.length; i++) {
    const element = myHeroes[i];
    // console.log(element);
}

// break and continue

// for (let i = 0; i < 20; i++) {
//     if(i == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${i}`);               
// }
for (let i = 0; i < 20; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);               
}