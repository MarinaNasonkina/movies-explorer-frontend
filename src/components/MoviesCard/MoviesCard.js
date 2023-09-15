import { useState } from 'react';

import Button from '../Button/Button';

import { DB_URL } from '../../vendor/beatfilm-movies';

import './MoviesCard.css';

export default function MoviesCard({ movie, isPathMovies }) {
  const [isSaved, setIsSaved] = useState(false);

  function toggleIsSaved() {
    setIsSaved(!isSaved);
  }

  function handleDelete(e) {
    e.target.closest('.card').remove();
  }

  return (
    <article className='card'>
      <a
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
        className='card__trailer'
      >
        <img
          src={`${DB_URL}${movie.image.url}`}
          alt={movie.description}
          className='card__image'
        />
      </a>
      <div className='card__info'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <p className='card__duration'>
          {`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}
        </p>
      </div>
      {isPathMovies ? (
        <Button
          type='button'
          className={`card__save-btn${isSaved ? ' card__save-btn_active' : ''}`}
          ariaLabel={`${
            isSaved
              ? 'Удалить фильм из сохраненных.'
              : 'Добавить фильм в сохраненные.'
          }`}
          onClick={toggleIsSaved}
        >
          {isSaved ? '' : 'Сохранить'}
        </Button>
      ) : (
        <Button
          type='button'
          className='card__delete-btn'
          ariaLabel='Удалить фильм из сохраненных.'
          onClick={handleDelete}
        />
      )}
    </article>
  );
}
