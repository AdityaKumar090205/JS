const nums = [1, 2, 3]

// const newTotal = nums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval;
// },0)

const newTotal = nums.reduce( (acc,currval) => acc+currval,0)
console.log(newTotal);

const ShoppingCart = [
    {
        coursename: "js course",
        price: 999
    },
    {
        coursename: "fullstack course",
        price: 3999
    },
    {
        coursename: "mobile development course",
        price: 4999
    },
    {
        coursename: "datascience course",
        price: 3999
    },
    {
        coursename: "ai course",
        price: 9999
    }
]

const PricetoPay = ShoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(PricetoPay);
