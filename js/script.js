"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Какой последний фильм вы смотрели?', ''),
//       b = +prompt('На сколько оцените его?', ''),
//       c = prompt('Какой последний фильм вы смотрели?', ''),
//       d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Какой последний фильм вы смотрели?', ''),
          b = +prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    };
};
const d = personalMovieDB.count
if (d > 0 && d < 10) {
    alert('Просмотрено довольно мало фильмов'),
    console.log(d);
} else if (d >= 10 && d <= 30) {
    alert('Вы классический зритель'),
    console.log(d);
} else if (d > 30) {
    alert('Вы киноман'),
    console.log(d);
} else {
    alert('Произошла ошибка')
}

console.log(personalMovieDB);