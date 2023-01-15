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
const  numberofFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
const personalMovieDB = {
  count : {numberofFilms},
  movies : {},
  actors : {},
  genres : [],
  privat : false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('Насколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('Насколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
