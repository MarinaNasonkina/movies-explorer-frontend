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
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(userData) {
    setLoggedIn(true);
    setCurrentUser(userData);
  }

  function handleLogOut() {
    setLoggedIn(false);
    setCurrentUser({});
  }

  function checkToken() {
    mainApi
      .getUserData()
      .then((userData) => {
        handleLogin(userData);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}. Похоже, вы не авторизованы.`);
      });
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
        <Route
          path='/movies'
          element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />}
        />
        <Route
          path='/saved-movies'
          element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />}
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
