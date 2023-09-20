import { useState } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { beatfilmMovies } from '../../vendor/beatfilm-movies';

import './Movies.css';

export default function Movies({ loggedIn }) {
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
      <main className='movies'>
        <SearchForm onSearch={handleSearch} />
        <MoviesCardList
          title='Результаты поиска фильмов.'
          isPreloading={isPreloading}
          movies={beatfilmMovies}
        />
      </main>
      <Footer />
    </>
  );
}
