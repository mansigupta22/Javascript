const coding = ["js", "cpp", "ruby", "java", "phython", "c"]

coding.forEach( function (val) {
    console.log(val);
});

coding.forEach( val => {
    console.log(val);
}); //arrow cunction

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "ruby",
        languageFileName: "R"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
});