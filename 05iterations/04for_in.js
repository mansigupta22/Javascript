const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["java", "cpp", "ruby", "js"]
for (const key in programming) {
    console.log(programming[key]);
}


const  map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") 

for (const key in map) {
    console.log(key);
} // map is not iteratable like this in js, we'll learn more about it in the comimg lectures


// Objects - for in loop
// arrays - for of loop