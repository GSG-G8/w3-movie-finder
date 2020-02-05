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
const famousMovies = document.querySelector('.famousMovies');
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
function showTheMovies() {
  const TheUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key.TMDB}&language=en-US&page=1year=2019`;
  sendRequest(TheUrl, response => {
    response.results.forEach(element => {
      createMovieElement(element);
      renderMovies(response.results);
    });
  });
}
showTheMovies();
function createMovieElement(obj ) {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('movieshow__container-movie');

  const imgUrl = `https://image.tmdb.org/t/p/w300${obj.poster_path}`;
  const img = document.createElement('img');
  img.setAttribute('src', `${imgUrl}`);
  img.movieID = obj.id;
  img.onclick = selectMovie;
  resultDiv.appendChild(img);

  const titleSpan = document.createElement('span');
  titleSpan.textContent = obj.title;
  titleSpan.classList.add('movieshow__container-movie_rightspan');
  resultDiv.appendChild(titleSpan);

  const rateSpan = document.createElement('span');
  rateSpan.classList.add('movieshow__container-movie_leftspan');

  const favoSpan = document.createElement('i');
  favoSpan.classList.add('fa', 'fa-heart-o', 'add-to-favorite');
  resultDiv.appendChild(favoSpan);

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

function createMovieElementFamous(obj ) {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('movieshow__container-movie');

  const imgUrl = `https://image.tmdb.org/t/p/w300${obj.poster_path}`;
  const img = document.createElement('img');
  img.setAttribute('src', `${imgUrl}`);
  resultDiv.appendChild(img);

  const titleSpan = document.createElement('span');
  titleSpan.textContent = obj.title;
  titleSpan.classList.add('movieshow__container-movie_rightspan');
  resultDiv.appendChild(titleSpan);

  const rateSpan = document.createElement('span');
  rateSpan.classList.add('movieshow__container-movie_leftspan');

  const favoSpan = document.createElement('i');
  favoSpan.classList.add('fa', 'fa-heart-o', 'add-to-favorite');
  resultDiv.appendChild(favoSpan); 
  
  const numberOfStar = Math.floor(obj.vote_average / 2);
  for (let i = 0; i <= numberOfStar; i++) {
    const rateStar = document.createElement('i');
    rateStar.classList.add('fa', 'fa-star');
    rateStar.setAttribute('aria-hidden', 'true');
    rateSpan.appendChild(rateStar);
  }
  resultDiv.appendChild(rateSpan);
  famousMovies.appendChild(resultDiv);

  return resultDiv;
}


function TopMovies() {
  const TheUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key.TMDB}&language=en-US&page=1year=2019`;
  sendRequest(TheUrl, response => {
    response.results.forEach(element => {
      createMovieElementFamous(element);
    });

  });
}

function selectMovie() {
  const url = `https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${key.TMDB}&language=en-US`;

  document.querySelector('.movie').style.display = 'block';

  sendRequest(url, function(response) {
    document.querySelector(
      '.movie_details_img'
    ).src = `https://image.tmdb.org/t/p/w500${response.poster_path}`;
    document.querySelector('.details_title').textContent =
      response.title + '  (' + response.release_date.split('-')[0] + ')';
    document.querySelector('.details_overview').textContent = response.overview;
    document.querySelector('.details_language').textContent =
      response.original_language;
    document.querySelector('.details_rating').textContent =
      response.vote_average;
    document.querySelector('.details_votecount').textContent =
      response.vote_count;
    document.querySelector('.details_date').textContent = response.release_date;
    document.querySelector('.details_runtime').textContent = minutesToString(
      response.runtime
    );
    document.querySelector(
      '.details_country'
    ).textContent = response.production_countries.map(g => g.name).join(' , ');
    document.querySelector('.details_genres').textContent = response.genres
      .map(g => g.name)
      .join(' , ');
    document.querySelector(
      '.details_imdb'
    ).href = `https://www.imdb.com/title/${response.imdb_id}`;
    const soundtrackAPI = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${response.title}+soundtrack&api_key=${key.lastFM}&limit=4&format=json`
    sendRequest(soundtrackAPI, function(res) {
    document.querySelector('.soundtrack__container--img1').setAttribute('src', res.results.albummatches.album[0].image[3]['#text']);
    document.querySelector('.soundtrack__container--title1').textContent = res.results.albummatches.album[0].name;
    document.querySelector('.soundtrack__container--artist1').textContent = res.results.albummatches.album[0].artist;

    document.querySelector('.soundtrack__container--img2').setAttribute('src', res.results.albummatches.album[1].image[3]['#text']);
    document.querySelector('.soundtrack__container--title2').textContent = res.results.albummatches.album[1].name;
    document.querySelector('.soundtrack__container--artist2').textContent = res.results.albummatches.album[1].artist;


    document.querySelector('.soundtrack__container--img3').setAttribute('src', res.results.albummatches.album[2].image[3]['#text']);
    document.querySelector('.soundtrack__container--title3').textContent = res.results.albummatches.album[2].name;
    document.querySelector('.soundtrack__container--artist3').textContent = res.results.albummatches.album[2].artist;

})

    
  });


  //genres
}

function minutesToString(min) {
  return ((min / 60) | 0) + 'h ' + (min % 60) + 'min';
}


