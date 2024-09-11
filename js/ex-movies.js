'use strict'

// Write the following functions:

// • getMovieLink(imdb) that returns a link to that movie, the function returns an HTML like:
// <a href="https://www.imdb.com/title/tt0073052/">Harry Potter</a>

// • deleteMovie(imdb) that removes a movie from the array
// TIP: use findIndex

// • Code the functions: sortByName, sortByRate


var gMovies = [
    { imdb: 'tt0373889', name: 'Harry Potter', rate: 17 },
    { imdb: 'tt0000004', name: 'Un bon bock', rate: 20 },
    { imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15 },
]


function getMovieLink1(imdb) {   //first solution with findIdx
    var strHTML = `<a href="https://www.imdb.com/title/${imdb}/">`
    const movieIdx = gMovies.findIndex(movie => movie.imdb === imdb)
    return strHTML + gMovies[movieIdx].name + '</a>'
}

function getMovieLink2(imdb) {  //second solution with find
    var strHTML = `<a href="https://www.imdb.com/title/${imdb}/">`
    const movie = gMovies.find(movie => movie.imdb === imdb)
    return strHTML + movie.name + '</a>'
}

function deleteMovie(imdb){
    const movieIdx = gMovies.findIndex(movie => movie.imdb === imdb)
    gMovies.splice(1,movieIdx)
}

function sortByName(movies){
    movies.sort((movie1,movie2) => movie1.name.localeCompare(movie2.name))
    return movies
}

function sortByRate(movies){
    movies.sort((movie1,movie2) => movie2.rate - movie1.rate)
    return movies
}



