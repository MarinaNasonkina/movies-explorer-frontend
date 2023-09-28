import { useLocation } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';

import './MoviesCardList.css';

export default function MoviesCardList({
  title,
  isPreloading,
  error,
  movies,
  savedMovies,
  moviesDisplayed,
  onSave,
  onDelete,
  onMoreClick,
}) {
  const location = useLocation();
  const isPathMovies = location.pathname === '/movies';

  return (
    <section className='movies-list' aria-label={title}>
      {isPreloading ? (
        <Preloader />
      ) : (
        <>
          {error ? (
            <p className='movies-list__error'>{error}</p>
          ) : (
            <>
              <div className='movies-list__container'>
                {movies
                  .slice(0, moviesDisplayed)
                  .map((movie) => (
                    <MoviesCard
                      key={movie.movieId}
                      movie={movie}
                      savedMovies={savedMovies}
                      isPathMovies={isPathMovies}
                      onSave={onSave}
                      onDelete={onDelete}
                    />
                  ))
                }
              </div>
              {isPathMovies && movies.length > moviesDisplayed && (
                <Button
                  type='button'
                  className='movies-list__more-btn'
                  onClick={onMoreClick}
                >
                  Ещё
                </Button>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}
