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

// 


// const  numberofFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
// const personalMovieDB = {
//   count : {numberofFilms},
//   movies : {},
//   actors : {},
//   genres : [],
//   privat : false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('Насколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('Насколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola ) {
//    console.log('Done!')
// }

function firstTask() {
   for (let i = 5; i < 11; i++) {
      console.log(i);
   }
}

for ( let i = 20; i > 10; --i) {
   if  (i == 13) {
      break;
   }
   console.log(i);
}

for (let i = 1; i <= 10; i++) {
   if (i % 2 === 1) {
       continue;
   } else {
       console.log(i);
   }
}

// for (let i = 2; i <= 16; i++) {
//        if (i % 2 === 0) {
//            continue;
//        } else {
//            console.log(i);
//        }
//    }



let i = 2;
while ( i <= 15) {
   i++;
   if (i % 2 === 0){
            continue;
   } else{
      console.log(i);
   }
}
  
const arrayOfNumber = [];
let start = 5;
while (start <=10) {
   arrayOfNumber.push(start++);
}

console.log(arrayOfNumber);



const arr = [3, 5, 8, 16, 20, 23, 50];
let result = [];
for (let i = 0; i < arr.length; i++) {
   result[i] = arr[i];
}
console.log(result);
    


function secondTask() {
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   for (let i = 0; i < data.length; i++) {
       if (typeof(data[i]) === 'number') {
           data[i] = data[i] * 2;
       } else if (typeof(data[i]) === 'string') {
           data[i] = `${data[i]} - done`;
       }
   }

   console.log(data);
   return data;
}


const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);


    