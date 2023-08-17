function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("I");
}
//  sayMyName()

// function addTwoNo(num1, num2){
//     console.log(num1 + num2 );
// } //() input inside function is called parameters
// addTwoNo(2, "4")
// addTwoNo(2, 3)
// addTwoNo(2, "a")
// addTwoNo(2, null) // here () inside paraenthesis are Arguments

// const result = addTwoNo(2, 3)
// console.log("Result:" , result); 

function addTwoNo(num1, num2){
    // let result = num1 +num2 ;
    // console.log("Mansi"); // it'll print as return is after this 
    // return result
    // console.log("Mansi"); // it'll never print as return ends the function there

    return num1 + num2
} 

const result = addTwoNo(3,4)
// console.log("Result:" , result);

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Mansi"));

function loginUserMessage(username){
    if(username === undefined){
        console.log("Plz enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function loginUserMessage(username = "m"){
    if(!username){
        console.log("Plz enter a username");
        return
    }
}
// console.log(loginUserMessage("g"));

function calculateCartPrice(val1, val2, ...num1){ // here ... is rest operator 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 300))

const user = {
    course: "html",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.course} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "css",
    price: 299
})

const myNewArray = [200, 3000, 700, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,100,400]));