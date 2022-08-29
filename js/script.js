"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

        // ПЕРВЫЙ ВАРИАНТ БЕЗ ЦИКЛА
// let firstFilm = prompt("Один из последних просмотренных фильмов?", ''),
//     firstRate = prompt("На сколько оцените его?", ''),
//     secondFilm = prompt("Ещё один из последних просмотренных фильмов?", ''),
//     secondRate = prompt("На сколько оцените его?", '');


        // ВТОРОЙ ВАРИАНТ С ЦИКЛОМ
let film,
    rate;

//  for (let i = 1; i <= 2; i++){
//     film = prompt("Один из последних просмотренных фильмов?", '');
//     rate = prompt("На сколько оцените его?", '');

//     if(film.length < 50 && rate < 50 && film != null && rate != null && film != '' && rate != '') {
//         personalMovieDB.movies[film] = +rate;
//         console.log('done');
//     }
//     else{
//         i--;
//         console.log('error');
//         }
// }

        //ЕЩЕ ОДИН ВАРИАНТ НАПИСАНИЯ ЦИКЛА
// let i = 0;
// while (i < 2){
//     film = prompt("Один из последних просмотренных фильмов?", '');
//     rate = prompt("На сколько оцените его?", '');

//     if(film.length < 50 && rate < 50 && film != null && rate != null && film != '' && rate != '') {
//         personalMovieDB.movies[film] = +rate;
//         console.log('done');
//         i++;
//     }
//     else{
//         continue;
//     }
// }


for (let i = 1; i <= 2; i++){
    film = prompt("Один из последних просмотренных фильмов?", '');
    rate = prompt("На сколько оцените его?", '');

   (film.length < 50 && rate < 50 && film != null && rate != null && film != '' && rate != '') ? 
        personalMovieDB.movies[film] = +rate,
        console.log('done'):
    
        i--,
        console.log('error');
        
}   






if (numberOfFilms < 10 && numberOfFilms >= 0){
    console.log('Просмотрено довольно мало фильмов(');
}
else if(numberOfFilms >= 10 && numberOfFilms <= 30){
    console.log('Вы - классический зритель');
}
else if(numberOfFilms > 30){
    console.log('Вы - киноман!');
}
else{
    console.log('Произошла ошибка');
}








        // ПЕРВЫЙ ВАРИАНТ
// personalMovieDB.movies = {
//     [firstFilm]: +firstRate,
//     [secondFilm]: +secondRate

// };

        // ПЕОВЫЙ ВАРИАНТ, ДРУГАЯ КОМБИНАЦИЯ
// OR
// personalMovieDB.movies[firstFilm] = firstRate;
// personalMovieDB.movies[secondFilm] = secondRate;

console.log(personalMovieDB);