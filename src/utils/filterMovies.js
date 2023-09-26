import { SHORT_FILM_DURATION } from './constants';

export default function filterMovies(movies, { query, isFiltered }) {
  const keyword = query.toLowerCase();

  return movies.filter((movie) => {
    const nameRU = movie.nameRU.toLowerCase();
    const nameEN = movie.nameEN.toLowerCase();
    const shortFilm = movie.duration <= SHORT_FILM_DURATION;

    return isFiltered
      ? (nameRU.includes(keyword) || nameEN.includes(keyword)) && shortFilm
      : nameRU.includes(keyword) || nameEN.includes(keyword);
  });
}
