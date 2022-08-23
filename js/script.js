"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstFilm = prompt("Один из последних просмотренных фильмов?", ''),
    firstRate = prompt("На сколько оцените его?", ''),
    secondFilm = prompt("Ещё один из последних просмотренных фильмов?", ''),
    secondRate = prompt("На сколько оцените его?", '');

personalMovieDB.movies = {
    [firstFilm]: +firstRate,
    [secondFilm]: +secondRate

};

// OR
// personalMovieDB.movies[firstFilm] = firstRate;
// personalMovieDB.movies[secondFilm] = secondRate;

console.log(personalMovieDB);