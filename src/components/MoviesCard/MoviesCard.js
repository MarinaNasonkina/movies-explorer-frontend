import { useState } from 'react';

import Button from '../Button/Button';

import './MoviesCard.css';

export default function MoviesCard({
  movie,
  isMovieSaved,
  isPathMovies,
  onSave,
  onDelete,
}) {
  const [isSaved, setIsSaved] = useState(isMovieSaved);

  function toggleIsSaved() {
    setIsSaved(!isSaved);
  }

  function handleSaveClick() {
    isSaved ? onDelete(movie) : onSave(movie);
    toggleIsSaved();
  }

  function handleDelete() {
    onDelete(movie);
    toggleIsSaved();
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
          src={movie.image}
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
          onClick={handleSaveClick}
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
