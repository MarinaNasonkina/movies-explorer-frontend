import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

export default function SearchForm({
  query,
  setQuery,
  isFiltered,
  setIsFiltered,
  onSearch,
}) {
  const [isErrVisible, setIsErrVisible] = useState(false);
  const location = useLocation();
  const isPathMovies = location.pathname === '/movies';

  function handleSearch(query, isFiltered) {
    if (query) {
      onSearch({ query, isFiltered });
    } else {
      setIsErrVisible(true);
      setTimeout(() => {
        setIsErrVisible(false);
      }, 1800);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(query.trim(), isFiltered);
  }

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleFilterChange(e) {
    setIsFiltered(e.target.checked);

    const movies = isPathMovies
      ? JSON.parse(localStorage.getItem('filteredMovies'))
      : JSON.parse(localStorage.getItem('savedMovies'));

    if (movies && movies.length > 0) handleSearch(query.trim(), !isFiltered);
  }

  return (
    <section className='search' aria-label='Форма поиска фильмов.'>
      <form
        method='GET'
        name='search'
        className='search__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='search__container'>
          <input
            className='search__field'
            type='text'
            value={query || ''}
            onChange={handleQueryChange}
            placeholder='Фильм'
            aria-label='Поисковый запрос.'
            required
          />
          <Button type='submit' className='search__btn'>
            Найти
          </Button>
          <span
            className={`search__err${
              isErrVisible ? ' search__err_visible ' : ''
            }`}
          >
            Нужно ввести ключевое слово.
          </span>
        </div>
        <FilterCheckbox value={isFiltered} onChange={handleFilterChange} />
      </form>
    </section>
  );
}
