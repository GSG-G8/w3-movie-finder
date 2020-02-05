function sendRequest(url, cbllback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cbllback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

const movieShow = document.querySelector('.movieshow');
const searchBtn = document.querySelector('.search__button');
searchBtn.addEventListener('click', search);
function search() {
  const searchName = document.getElementById('search-name');
  const searchYear = document.getElementById('search-year');
  const TheUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key.TMDB}&language=en-US&query=${searchName.value}&page=1&include_adult=false&year=${searchYear.value}`;

  sendRequest(TheUrl, response => {
    response.results.forEach(element => {
      createMovieElement(element);
      renderMovies(response.results);
    });
  });
}

function createMovieElement(obj) {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('movieshow__container-movie');

  const imgUrl = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
  const img = document.createElement('img');
  img.setAttribute('src', `${imgUrl}`);
  resultDiv.appendChild(img);

  const titleSpan = document.createElement('span');
  titleSpan.textContent = obj.title;
  titleSpan.classList.add('movieshow__container-movie_rightspan');
  resultDiv.appendChild(titleSpan);

  const rateSpan = document.createElement('span');
  rateSpan.classList.add('movieshow__container-movie_leftspan');

  const numberOfStar = Math.floor(obj.vote_average / 2);
  for (let i = 0; i <= numberOfStar; i++) {
    const rateStar = document.createElement('i');
    rateStar.classList.add('fa', 'fa-star');
    rateStar.setAttribute('aria-hidden', 'true');
    rateSpan.appendChild(rateStar);
  }
  resultDiv.appendChild(rateSpan);
  movieShow.appendChild(resultDiv);

  return resultDiv;
}

function renderMovies(arr) {
  movieShow.textContent = '';
  arr
    .filter(m => m.poster_path != null)
    .map(e => {
      const resultDiv = createMovieElement(e);
      movieShow.appendChild(resultDiv);
    });
}
