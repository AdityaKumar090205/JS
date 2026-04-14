//Immediately Invoked Function (IIFE)
//Used to remove global scope pollution

(function chai(){
    //Named IIFE
    console.log(`Hello world`);
})();

( (name) => {
    //Simple IIFE
    console.log(`Hello world ${name}`);
})(`ak`)