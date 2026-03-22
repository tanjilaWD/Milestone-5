// Array
const arr = [1,2,3,4,5,6,7,8];
const [one, two, , , five] = arr;
console.log(one, two, five);

//object
let obj ={
    name: 'Hablu',
    address: 'Khulna',
    age: 22,
    street: '10A B37',
    city: 'Khulna',
    division: 'Phultala',
    language: 'Bangla',
    hobby: 'Reading',
    location:{
        district: 'Dhaka',
        union:'Test',
        address:{
            streetNumber: '10A',
            house:'10B'
        }
    }
};
// let {age, name, address, street, location:{address: locationAddress}, ...rest} = obj;

let {age, name, address, street, location:{address: {house}}} = obj;

// console.log(age, name, address, street,locationAddress);

console.log(house)
