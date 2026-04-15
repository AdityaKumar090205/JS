//Immediately Invoked Function (IIFE)
//Used to remove global scope pollution to reduce usage of same variable

(function chai(){
    //Named IIFE
    console.log(`Hello world`);
})();

( (name) => {
    //Simple IIFE
    console.log(`Hello world ${name}`);
})(`ak`)
