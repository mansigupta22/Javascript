const userEmail = "mansi.ai"

if(userEmail){
    console.log("got email");
}
else{
    console.log("no email");
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// everything other than falsy values is truthy values example
// "0", 'false', " ", //anything inside string is truthy value
// [], {}, function(){}

const userValue = []
if(userValue.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}