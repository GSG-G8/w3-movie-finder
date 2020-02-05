const movieDetDom = document.querySelector('.movie');
const FilmsDom = document.getElementById('Films');
const CloseDetDom = document.getElementById('closeDet');
const famousMoviesDom = document.querySelector('.famousMovies');
const movieshowDom = document.querySelector('.movieshow');
const searchDom = document.querySelector('.search');
const back_to_home = document.querySelector('.back_to_home');
const Get_Popular = document.getElementById('Popular');
const Get_Top_Rated = document.getElementById('Rated');
const Get_Upcoming = document.getElementById('Upcoming');

CloseDetDom.addEventListener('click',()=>{
    movieDetDom.style.display = 'none';
})

FilmsDom.addEventListener('click',()=>{
    movieDetDom.style.display = 'none';
    famousMoviesDom.style.display ='flex';
    movieshowDom.style.display ='none';
    searchDom.style.display = 'none';
    back_to_home.style.display = 'block';
    TopMovies();
})

back_to_home.addEventListener('click',()=>{
    movieDetDom.style.display = 'none';
    famousMoviesDom.style.display ='none';
    movieshowDom.style.display ='flex';
    searchDom.style.display = 'flex';
    back_to_home.style.display = 'none';
})

Get_Popular.addEventListener('click',()=>{
    popularMovies();
})


Get_Top_Rated.addEventListener('click',()=>{
    RatedMovies();
})

Get_Upcoming.addEventListener('click',()=>{
    UpcomingMovies();
})

