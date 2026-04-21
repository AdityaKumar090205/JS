// for of

// ["", "", ""]
// [{},{},{}]

const arr1 = [7,5,73,1,2]
for (const nums of arr1) {
    // console.log(nums);
}

const arr2 = "hello coders!"
for (const char of arr2) {
    if(char==" "){
        continue;
    }
    // console.log(char);
}

//Maps

const map = new Map()
map.set("IND","INDIA")
map.set("CHN","CHINA")
map.set("UK","UNITED KINGDOM")

// console.log(map);

for (const [keys,values] of map) {
    // console.log(keys,"-", values);
}

const myObj = {
    game1: "RE7",
    game2: "Mario"
}

for (const [keys,values] of myObj) {
    console.log(keys,"-", values);    
}