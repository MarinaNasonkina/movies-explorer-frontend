import { useLocation } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';

import './MoviesCardList.css';

export default function MoviesCardList({ title, isPreloading, movies }) {
  const location = useLocation();
  const isPathMovies = location.pathname === '/movies';

  return (
    <section className='movies-list' aria-label={title}>
      {isPreloading ? (
        <Preloader />
      ) : (
        <>
          <div className='movies-list__container'>
            {movies.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                isPathMovies={isPathMovies}
              />
            ))}
          </div>
          {isPathMovies ? (
            <Button type='button' className='movies-list__more-btn'>
              Ещё
            </Button>
          ) : (
            <></>
          )}
        </>
      )}
    </section>
  );
}
