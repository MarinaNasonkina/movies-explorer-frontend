import { useState } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { savedMovies } from '../../vendor/beatfilm-movies';

import './SavedMovies.css';

export default function SavedMovies({ loggedIn }) {
  const [isPreloading, setIsPreloading] = useState(false);

  function handleSearch() {
    setIsPreloading(true);
    setTimeout(() => {
      setIsPreloading(false);
    }, 2000);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies'>
        <SearchForm onSearch={handleSearch} />
        <MoviesCardList
          title='Сохранённые фильмы.'
          isPreloading={isPreloading}
          movies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}
