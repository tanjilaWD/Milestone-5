// Falsy value --> false, 0, "", undefind, NaN
// Truthy value --> falsy value gula baad diye baki sob truthy value

if(100){
    console.log('If block triggered');
} else{
    console.log('Else block triggered')
}

let arr = [1,2,3,5,6]
let isThreeHundredExist = arr.find(elem => elem === 300)
console.log(isThreeHundredExist);