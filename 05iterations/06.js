const coding = ["js", "cpp", "ruby", "java", "phython", "c"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//         return item
// });
// console.log(values); // undefined

const myNum = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter( (num) => num > 4) // here we can directly use num > 4 and it'll provide the values // implicit function
console.log(newNum);


const myNums = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (nums) => {
    return nums > 4 // we have to use return keyword bcz here scope {} is used // explicit 
})
console.log(newNums);


const newNumber = []
myNums.forEach( number => {
    if (number > 4){
        newNumber.push(number)
    }
});
console.log(newNumber);