const friends = ['zaved', 'naved', 'khaled', 'sajed'];
const firstLetters = friends.map(frd => frd[0]);
// console.log(firstLetters);


const products = [
    {name: 'laptop', price: 45000},
    {name: 'phone', price: 15000},
    {name: 'tablet', price: 25000}
];
// const prices = products.map(pd => pd.price*2);
// console.log(prices);

// const names = products.map(pd => {
//     const upperCaseName = pd.name.toLocaleUpperCase();
//     return upperCaseName;
// })
// console.log(names);

const result = products.forEach(pd => console.log(pd.name));
console.log(result);