import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  function handleLogin(userData) {
    setLoggedIn(true);
    setCurrentUser(userData);
  }

  function handleLogOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
  }

  function checkToken() {
    setIsLoading(true);
    mainApi
      .getUserData()
      .then((userData) => {
        handleLogin(userData);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}. Похоже, вы не авторизованы.`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getSavedMovies() {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(`Произошла ошибка: ${err}.`))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function saveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => console.log(`Произошла ошибка: ${err}.`));
  }

  function deleteMovie(movie) {
    const movieId = savedMovies.find((item) => movie.movieId === item.movieId)._id;

    mainApi
      .deleteMovie(movieId)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((oldMovie) => oldMovie._id !== movieId)
        );
      })
      .catch((err) => console.log(`Произошла ошибка: ${err}.`));
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn) getSavedMovies();
  }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return isLoading ? (
    <></>
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
        <Route
          path='/movies'
          element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onSave={saveMovie}
              onDelete={deleteMovie}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onDelete={deleteMovie}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              setCurrentUser={setCurrentUser}
              onLogOut={handleLogOut}
            />
          }
        />
        <Route
          path='/signup'
          element={
            loggedIn ? (
              <Navigate to='/' replace />
            ) : (
              <Register onRegister={handleLogin} />
            )
          }
        />
        <Route
          path='/signin'
          element={
            loggedIn ? (
              <Navigate to='/' replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}
