"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count  = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Какой последний фильм вы смотрели?', ''),
                  b = +prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            };
        };
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка')
        };
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i} ?`);
            if (a == null || a == '') {
                alert('Вы оставили пустую строку / отменили ввод данных.');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = a;
            };
        };
        // for (let i in personalMovieDB.genres) {
        //     let num = Number(i) + 1;
        //     console.log(`Любимый жанр#${num} - это ${personalMovieDB.genres[i]}`);
        // };
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        })
    },
    toggleVisibleMyDb: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;;
        };
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        };
    },
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDb();
personalMovieDB.showMyDB();