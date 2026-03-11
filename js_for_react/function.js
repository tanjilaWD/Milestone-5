// function expression
function myFunc(a,b){
    console.log(a,b);
}
myFunc(1,2);

// arrow function (es6)
const myFunc4 = (a,b) => a * b;
const multiply = myFunc4(1,2);
console.log(multiply);
