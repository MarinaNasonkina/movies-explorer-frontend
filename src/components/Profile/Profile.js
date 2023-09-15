import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Button from '../Button/Button';

import useFormValidator from '../../utils/useFormValidator';

import './Profile.css';

export default function Profile({ loggedIn, user, onLogOut }) {
  const navigate = useNavigate();
  const [isEdited, setIsEdited] = useState(false);
  const {
    values,
    setValues,
    errors,
    isDisabled,
    handleChange,
  } = useFormValidator();
  const { name, email } = values;

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

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email,
    });
  }, [setValues, user]);

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
                  placeholder='Введите имя'
                  name='name'
                  type='text'
                  value={name || ''}
                  onChange={handleChange}
                  minLength='2'
                  maxLength='30'
                  autoComplete='name'
                  required
                />
              </label>
              <span className='profile__field-err'>{errors.name}</span>
              <label className='profile__label'>
                E-mail
                <input
                  disabled={!isEdited}
                  className='profile__field'
                  placeholder='Введите e-mail'
                  name='email'
                  type='email'
                  value={email || ''}
                  onChange={handleChange}
                  minLength='6'
                  maxLength='64'
                  autoComplete='email'
                  required
                />
              </label>
              <span className='profile__field-err'>{errors.email}</span>
            </div>
            {isEdited ? (
              <div className='profile__btns profile__btns_type_submit'>
                <span className='profile__submit-err'></span>
                <Button
                  type='submit'
                  isDisabled={isDisabled}
                  className='profile__submit-btn'
                >
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
