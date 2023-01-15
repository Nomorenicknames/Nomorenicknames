// console.log("I study");

// const obj = {
//   a: 20,
// };

// console.log(obj);

// obj.a = 50;
// console.log(obj);

// let storeProd = "Pen";
// let storeDescription = {
//     'budget' : 10000,
//     'employees' : ['Dima', 'Lena', 'Nastya'],
//       'products' : {
//           'apple' : 5,
//           'juce' : 7,
//         },
//     'open' : true
    
// };
// console.log(storeDescription);
// alert(storeDescription.open);

let storeProd = "Pen";
let storeDescription = {
    'budget' : 10000,
    'employees' : [],
      'products' : {
          'apple' : 5,
          'juce' : 7,
        },
    'open' : true
    
};

storeDescription.employees[0] = prompt('enter person name',  '');
storeDescription.employees[1] = prompt('enter person name',  '');
storeDescription.employees[2] = prompt('enter person name',  '');
console.log(storeDescription.employees);
alert(`Hello, ${storeDescription.employees[0]}`);