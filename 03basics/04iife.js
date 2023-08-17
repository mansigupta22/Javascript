// Immediately Invoked Function Expressions (IIFE)
// we use IIFE to remove the global scope pollution 

(function game(){ // named IIFE
    console.log(`DataBase CONNECTED`);
})(); // we need to use semi-colon to end the line so that JS knows where to stop the context

// ()()  // first (): function definition, second (): execution call


( (username) => {
    console.log(`DB ${username}`);
}) (`Mansi`); 