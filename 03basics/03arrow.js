const user = {
    username: "Mansi",
    course: "css",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // current context // can access this here in objects
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); 

// function tea(){
//     let username = "Mansi"
//     console.log(this.username); // can't access here like in objects
// }
// tea()


// const tea = function(){
//     let username = "Mansi"
//     console.log(this.username);
// }
// tea()


const tea = () => {
    let username = "Mansi"
    console.log(this); //empty parenthesis
    console.log(this.username) // undefined
}
tea()

// ******arrow function*********//

// () => {} //arrow functioon

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// } // always have to use return when we use curley braces

// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => num1 + num2 //implicit function

// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "Mansi"}) // 
console.log(addTwo(3,4));


const myArray = [20, 30, 50]
myArray.forEach(function)