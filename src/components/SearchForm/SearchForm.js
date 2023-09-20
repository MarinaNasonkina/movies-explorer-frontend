import { useState } from 'react';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

export default function SearchForm({ onSearch }) {
  const [isFiltered, setIsFiltered] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }

  function handleChange(e) {
    setIsFiltered(e.target.checked);
  }

  return (
    <section className='search' aria-label='Форма поиска фильмов.'>
      <form
        method='get'
        name='search'
        className='search__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='search__container'>
          <input
            className='search__field'
            type='text'
            placeholder='Фильм'
            aria-label='Поисковый запрос.'
            required
          />
          <Button type='submit' className='search__btn'>
            Найти
          </Button>
        </div>
        <FilterCheckbox value={isFiltered} onChange={handleChange} />
      </form>
    </section>
  );
}
