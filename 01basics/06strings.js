// string are most powerful in any language, so it's imp to understand them

const name = "Mansi"
const age = 20

// console.log(name + age + " Value"); // not good way to write code

console.log(`Hello my name is ${name} and my repo count is ${age}`); // we use backticks``, it creates string interpolation, it makes placeholders ${} and we can directly inject variables in it.



const discordName = new String('Mansi-vc')

console.log(discordName[0]); // to access key value pair 

console.log(discordName.__proto__); // object // best way to access these prototype methods is in console on browser // if 'f' is mention their means they all are functions

console.log(discordName.length); // length of string 

console.log(discordName.toUpperCase()); // turn value into Upercase and it doesn't change the original string bcz of stack memory(call by value)

console.log(discordName.charAt(3)); // to check what char is at that position

console.log(discordName.indexOf('n')); // to check the position of character

const newString = discordName.substring(0, 4) // doesn't include the last value in it // don't include -ve value instead start from zero
console.log(newString);

const anotherString = discordName.slice(-5,4) // takes -ve value
console.log(anotherString);


const newStringOne = "   Mansi  "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim down the extra space

const url = "https://mansi.com/mansi%10vc"
console.log(url.replace('%10', '-'));

console.log(url.includes('mansi'));
console.log(url.includes('game'));

console.log(discordName.split('-'));