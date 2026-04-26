const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.map( (num) => {return num+10})

//Map chaining
const newNums = nums
                .map( (num) => num*20 )
                .map( (num) => num + 3)
                .filter( (num) => num>=70)
console.log(newNums);
