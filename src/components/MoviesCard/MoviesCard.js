import { useState } from 'react';

import Button from '../Button/Button';

import { DB_URL } from '../../vendor/beatfilm-movies';
import saved from '../../images/saved.svg';

import './MoviesCard.css';

export default function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);

  function toggleIsSaved() {
    setIsSaved(!isSaved);
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
      <Button
        type='button'
        className={`card__save-btn${isSaved ? ' card__save-btn_active' : ''}`}
        onClick={toggleIsSaved}
      >
        {isSaved ? <img src={saved} alt='Фильм сохранен.' /> : 'Сохранить'}
      </Button>
    </article>
  );
}
