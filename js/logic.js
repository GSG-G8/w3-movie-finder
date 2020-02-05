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
  return resultDiv;
}
