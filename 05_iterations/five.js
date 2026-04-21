const coding = ["py","java","cpp","ruby","rust"]

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        filename: "javascript",
        filetype: "js"
    },
    {
        filename: "java",
        filetype: "java"
    },
    {
        filename: "python",
        filetype: "py"
    },
    {
        filename: "cpp",
        filetype: "c"
    }
]

myCoding.forEach( (item) => {
    console.log(item.filename);
})