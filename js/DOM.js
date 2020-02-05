const movieDom = document.querySelector('.movie');
const FilmsDom = document.getElementById('Films');
const CloseDetDom = document.getElementById('closeDet');
const famousMoviesDom = document.querySelector('.famousMovies');
const movieshowDom = document.querySelector('.movieshow');
const searchDom = document.querySelector('.search');

CloseDetDom.addEventListener('click',()=>{
    movieDom.style.display = 'none';
})

FilmsDom.addEventListener('click',()=>{
    movieDom.style.display = 'none';
    famousMoviesDom.style.display ='flex';
    movieshowDom.style.display ='none';
    searchDom.style.display = 'none';
    TopMovies();
})



