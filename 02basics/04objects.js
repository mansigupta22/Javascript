// Objects Constructor and singelton

// const tinderUser = new Object() //singelton Object
const tinderUser = {} // non singelton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstnam: "Mansi",
            lastname: "Gupta",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstnam); //we can access objects inside objects by using dot

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "e", 4: "d"}
const obj4 = {5: "e", 6: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // here we use {} for safety use means it'll definitely combine all values bcz it'll act as target and rest as source refer to mdn for further explanation

const obj3 = {...obj1, ...obj2, ...obj4} // spread method so we don't need to use assign much we can easily use this, it;s easy and latest
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "m@ybl.com"
    },
    {
        id: 2,
        email: "n@ybl.com"
    },
    {
        id: 3,
        email: "o@ybl.com"
    },
    {
        id: 4,
        email: "p@ybl.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // here it convert all the data into array, after that we can apply loop or other properties in this // superimp 

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // convert into array // first property is always key and second is value

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this method asks about the property and gives values in boolean form // we use this property to avoid crash when asking for some value which is not there 