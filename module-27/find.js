const students = [
    {name: 'Tormuj', age: 22},
    {name: 'Zaved', age: 21},
    {name: 'Navad', age: 23},
    {name: 'Khaled', age: 20},
    {name: 'Sajed', age: 22},
    {name: 'Mim', age: 28},
    {name: 'Bithi', age: 24}
];
const student = students.find(std => std.name === 'Bithi');
console.log(student);