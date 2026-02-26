const max = Math.max(3, 5, 1, 8, 58, 1);
console.log(max);

const numbers = [3, 5, 1, 8, 58, 1];
const max2 = Math.max(...numbers)
console.log(max2);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);

const person = {name: 'Tanjila', age: 22};
// const person2 = person;
const person2 = {...person};
person.salary = 36000;
console.log(person);
console.log(person2);