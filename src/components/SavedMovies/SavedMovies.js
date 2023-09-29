import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import filterMovies from '../../utils/filterMovies';
import { MSG_NOT_FOUND } from '../../utils/constants';

import './SavedMovies.css';

export default function SavedMovies({ loggedIn, savedMovies, onDelete }) {
  const [searchErr, setSearchErr] = useState('');
  const [query, setQuery] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [movies, setMovies] = useState([]);

  function handleSearch(queryOptions) {
    const filteredMovies = filterMovies(savedMovies, queryOptions);

    setMovies(filteredMovies);
  }

  useEffect(() => {
    if (query.length && movies.length) {
      setMovies((movies) =>
        movies.filter((movie) => savedMovies.includes(movie))
      );
    } else {
      setMovies(savedMovies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  useEffect(() => {
    if (query.trim() && movies.length === 0) {
      setSearchErr(MSG_NOT_FOUND);
    } else {
      setSearchErr('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies'>
        <SearchForm
          query={query}
          setQuery={setQuery}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
          onSearch={handleSearch}
        />
        <MoviesCardList
          title='Сохранённые фильмы.'
          error={searchErr}
          movies={movies}
          savedMovies={savedMovies}
          onDelete={onDelete}
        />
      </main>
      <Footer />
    </>
  );
}
