// var c = 300 // global scope

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
// }


// console.log(a); // error
// console.log(b); // error
// console.log(c); // print 300


let a = 300 // global scope
if (true){
    let a = 10
    const b = 20
    console.log("Inner:", a); // local scope
}
console.log(a);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// scope is different in node environment and different in browser environment