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
    // console.log("Inner:", a); // local scope
}
// console.log(a);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// scope is different in node environment and different in browser environment


// *******nested scope*******//
// child can access parent value

function one(){
     const username = "Mansi"

     function two(){
        const website = "github"
        console.log(username);
     }
    //  console.log(website);

    //  two()

}

// one()

if(true){
    const username = "Mansi"
    if(username === "Mansi"){
        const website = " leetcode"
        // console.log(username + website);
    }
    // console.log(website); // can't access bcz it's outside it's scope
}
// console.log(username); // outside scope

//**********intresting**********//

console.log(addone(5));
function addone(num){
    return num + 1
}

console.log(addTwo(5)) // can't access before initialization
const addTwo = function(num){
    return num + 2
}

