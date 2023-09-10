import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Button from '../Button/Button';

import './Profile.css';

export default function Profile({ loggedIn, user, onLogOut }) {
  const [isEdited, setIsEdited] = useState(false);
  const navigate = useNavigate();

  function toggleEditing() {
    setIsEdited(!isEdited);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleEditing();
  }

  function handleLogOut() {
    onLogOut();
    navigate('/');
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='profile'>
        <section className='profile__container'>
          <h1 className='profile__title'>Привет, {user.name}!</h1>
          <form
            method='post'
            name='edit-profile'
            className='profile__form'
            onSubmit={handleSubmit}
            noValidate
          >
            <div className='profile__fields'>
              <label className='profile__label'>
                Имя
                <input
                  disabled={!isEdited}
                  className='profile__field'
                  defaultValue={user.name}
                  placeholder='Введите имя'
                  name='name'
                  type='text'
                  minLength='2'
                  maxLength='30'
                  autoComplete='name'
                  required
                />
              </label>
              <span className='profile__field-err'></span>
              <label className='profile__label'>
                E-mail
                <input
                  disabled={!isEdited}
                  className='profile__field'
                  defaultValue={user.email}
                  placeholder='Введите e-mail'
                  name='email'
                  type='email'
                  minLength='6'
                  maxLength='64'
                  autoComplete='email'
                  required
                />
              </label>
              <span className='profile__field-err'></span>
            </div>
            {isEdited ? (
              <div className='profile__btns profile__btns_type_submit'>
                <span className='profile__submit-err'></span>
                <Button type='submit' className='profile__submit-btn'>
                  Сохранить
                </Button>
              </div>
            ) : (
              <div className='profile__btns'>
                <Button
                  type='button'
                  className='profile__btn'
                  onClick={toggleEditing}
                >
                  Редактировать
                </Button>
                <Button
                  type='button'
                  className='profile__btn profile__btn_type_logout'
                  onClick={handleLogOut}
                >
                  Выйти из аккаунта
                </Button>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
