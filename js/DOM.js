const movieDetDom = document.querySelector('.movie');
const CloseDetDom = document.getElementById('closeDet');
const searchDom = document.querySelector('.search');
const Get_Popular = document.getElementById('Popular');
const Get_Top_Rated = document.getElementById('Rated');
const Get_Upcoming = document.getElementById('Upcoming');
Get_Popular.style.borderBottom = 'none';
Get_Top_Rated.style.borderBottom = 'none';
Get_Upcoming.style.borderBottom = 'none';
CloseDetDom.addEventListener('click', () => {
  movieDetDom.style.display = 'none';
});

Get_Popular.addEventListener('click', () => {
  showTheMovies(popularUrl + 3);
  Get_Popular.style.borderBottom = '0.2rem solid red';
  Get_Top_Rated.style.borderBottom = 'none';
  Get_Upcoming.style.borderBottom = 'none';
  nextPage.style.display = 'none';
  backPage.style.display = 'none';
});

Get_Top_Rated.addEventListener('click', () => {
  showTheMovies(RatedUrl + 1);
  Get_Top_Rated.style.borderBottom = '0.2rem solid rgb(126, 30, 221) ';
  Get_Popular.style.borderBottom = 'none';
  Get_Upcoming.style.borderBottom = 'none';
  nextPage.style.display = 'none';
  backPage.style.display = 'none';
});

Get_Upcoming.addEventListener('click', () => {
  showTheMovies(upCominUrl + 4);
  Get_Upcoming.style.borderBottom = '0.2rem solid purple';
  Get_Popular.style.borderBottom = 'none';
  Get_Top_Rated.style.borderBottom = 'none';
  nextPage.style.display = 'none';
  backPage.style.display = 'none';
});
