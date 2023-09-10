import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const currentUser = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  };

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogOut() {
    setLoggedIn(false);
  }

  return (
    <Routes>
      <Route path='/' element={<Main loggedIn={loggedIn} />} />
      <Route path='/movies' element={<Movies loggedIn={true} />} />
      <Route path='/saved-movies' element={<SavedMovies loggedIn={true} />} />
      <Route path='/profile' element={<Profile loggedIn={true} user={currentUser} onLogOut={handleLogOut} />} />
      <Route path='/signup' element={<Register onRegister={handleLogin}/>} />
      <Route path='/signin' element={<Login onLogin={handleLogin} />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}
