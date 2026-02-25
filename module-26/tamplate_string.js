const firstName = 'Tanjila';
// const aboutMe = `My name is ${firstName}`;
const aboutMe = `My name is ${firstName}`;

// const giveMe = `give me money ${(10 + 20)*2 + 500}`;  //give me money 560
// const giveMe = 'give me money ${(10 + 20)*2 + 500}'; //give me money ${(10 + 20)*2 + 500}
// console.log(giveMe);

// const fullName = firstName + ' ' + lastName;
// const fullName2 = `${firstName} ${lastName}`;

function getCardHTML(name){
    const div = `
    <div class = "card">
     <h2>${name}</h2>
   
    </div>
    `;
    console.log(div);
}
getCardHTML('iphone 12');