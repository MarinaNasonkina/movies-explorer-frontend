import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import getMovies from '../../utils/MoviesApi';
import filterMovies from '../../utils/filterMovies';
import useMoviesLimiter from '../../utils/useMoviesLimiter';
import {
  DEFAULT_OPTIONS,
  MSG_NOT_FOUND,
  MSG_SEARCH_ERR,
} from '../../utils/constants';

import './Movies.css';

export default function Movies({ loggedIn, savedMovies, onSave, onDelete }) {
  const [isPreloading, setIsPreloading] = useState(false);
  const [searchErr, setSearchErr] = useState('');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [limiterOptions, setLimiterOptions] = useState(DEFAULT_OPTIONS);

  function handleMovies(movies, queryOptions) {
    const filteredMovies = filterMovies(movies, queryOptions);

    if (filteredMovies.length > 0) {
      setSearchErr('');
      setMovies(filteredMovies);
    } else {
      setSearchErr(MSG_NOT_FOUND);
    }

    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }

  function handleSearch(queryOptions) {
    localStorage.setItem('queryOptions', JSON.stringify(queryOptions));

    const beatfilmMovies = JSON.parse(localStorage.getItem('beatfilmMovies'));

    if (beatfilmMovies) {
      handleMovies(beatfilmMovies, queryOptions);
    } else {
      setIsPreloading(true);
      getMovies()
        .then((movies) => {
          localStorage.setItem('beatfilmMovies', JSON.stringify(movies));
          handleMovies(movies, queryOptions);
        })
        .catch(() => setSearchErr(MSG_SEARCH_ERR))
        .finally(() => {
          setIsPreloading(false);
        });
    }
  }

  function handleMoreClick() {
    setLimiterOptions({
      ...limiterOptions,
      displayed: limiterOptions.displayed + limiterOptions.append,
    });
  }

  useEffect(() => {
    const queryOptions = JSON.parse(localStorage.getItem('queryOptions'));
    const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));

    if (queryOptions) {
      setQuery(queryOptions.query);
      setIsFiltered(queryOptions.isFiltered);
    }

    if (filteredMovies) setMovies(filteredMovies);
  }, []);

  useMoviesLimiter(setLimiterOptions);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm
          query={query}
          setQuery={setQuery}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
          onSearch={handleSearch}
        />
        <MoviesCardList
          title='Результаты поиска фильмов.'
          isPreloading={isPreloading}
          error={searchErr}
          movies={movies}
          savedMovies={savedMovies}
          moviesDisplayed={limiterOptions.displayed}
          onSave={onSave}
          onDelete={onDelete}
          onMoreClick={handleMoreClick}
        />
      </main>
      <Footer />
    </>
  );
}
