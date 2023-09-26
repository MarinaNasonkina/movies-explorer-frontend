import { IMG_URL, MOVIES_URL } from './constants';

function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}

function simplifyMovies(movies) {
  return movies.map((movie) => {
    return {
      country: movie.country,
      director: movie.director.trim(),
      duration: movie.duration,
      year: movie.year,
      description: movie.description.trim(),
      image: `${IMG_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${IMG_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU.trim(),
      nameEN: movie.nameEN.trim(),
    };
  });
}

export default function getMovies() {
  return fetch(`${MOVIES_URL}`, {
    method: 'GET',
  })
    .then(getResponseData)
    .then(simplifyMovies);
}
