// Immediately Invoked Function Expressions (IIFE)
prevent from global pollution

named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); semicolon for multiple iife

unamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
parameter passing

