const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

const friends = ['zaved', 'naved', 'khaled', 'sajed', 'nahid', 'nasib'];
const Nfriends = friends.filter(frd => frd[0] === 'n');
// console.log(Nfriends);


const students = [
    {name: 'Tormuj', age: 22},
    {name: 'Zaved', age: 21},
    {name: 'Navad', age: 23},
    {name: 'Khaled', age: 20},
    {name: 'Sajed', age: 22},
    {name: 'Mim', age: 28},
    {name: 'Bithi', age: 24}
]
const olderStudents = students.filter(std => std.age > 20);
console.log(olderStudents);