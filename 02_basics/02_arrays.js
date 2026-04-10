const mc_heroes = ["spiderman", "ironman", "hulk"]
const dc_heroes = ["batman", "superman", "flash"]

// mc_heroes.push(dc_heroes)
// console.log(mc_heroes);
// console.log(mc_heroes[3][0]);

// const all_heroes = mc_heroes.concat(dc_heroes)
// console.log(all_heroes);

//Spread Operator

const all_new_heroes = [...mc_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1, 2, 3,[4, 5, 6], 7, 8, [9, 10, [11, 12, 13, [14, 15]]]]
const new_another_array= another_array.flat(Infinity)
// console.log(new_another_array);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
console.log(Array.from({name: "ak"})); //interesting as we have to specify what we want to turn into array keys or values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
