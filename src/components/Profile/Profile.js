import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Button from '../Button/Button';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';
import useFormValidator from '../../utils/useFormValidator';
import handleErr from '../../utils/handleErr';
import { MSG_SUCCESS_UPDATE } from '../../utils/constants';

import './Profile.css';

export default function Profile({ loggedIn, setCurrentUser, onLogOut }) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [isEdited, setIsEdited] = useState(false);
  const [submitMsg, setSubmitMsg] = useState('');
  const [isMsgVisible, setIsMsgVisible] = useState(false);
  const {
    values,
    setValues,
    errors,
    isDisabled,
    handleChange
  } = useFormValidator();
  const { name, email } = values;
  const isValueModified = name !== currentUser.name || email !== currentUser.email;

  function enableEditing() {
    setSubmitMsg('');
    setIsEdited(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    mainApi
      .editUserData({ name, email })
      .then((userData) => {
        setCurrentUser(userData);
        setSubmitMsg(MSG_SUCCESS_UPDATE);
        setIsEdited(false);
        setTimeout(() => {
          setSubmitMsg('');
        }, 3000);
      })
      .catch((err) => {
        handleErr(err, setSubmitMsg);
      });
  }

  function handleLogOut() {
    mainApi
      .logout()
      .then(() => {
        onLogOut();
        navigate('/');
      })
      .catch((err) => {
        handleErr(err, setSubmitMsg);
      });
  }

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser]);

  useEffect(() => {
    if (submitMsg) {
      setIsMsgVisible(true);
      setTimeout(() => {
        setIsMsgVisible(false);
      }, 2700);
    }
  }, [submitMsg]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='profile'>
        <section className='profile__container'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
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
                  pattern='^[a-zA-Zа-яА-ЯёЁ\- ]+$'
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
                  pattern='[\w.\-]+@[a-zA-Z0-9\-]+\.[a-z]{2,}'
                  minLength='6'
                  maxLength='64'
                  autoComplete='email'
                  required
                />
              </label>
              <span className='profile__field-err'>{errors.email}</span>
            </div>
            <div className='profile__btns'>
              <span
                className={`profile__submit-msg${
                  isMsgVisible ? ' profile__submit-msg_visible' : ''
                }${isEdited ? ' profile__submit-msg_type_err' : ''}`}
              >
                {submitMsg}
              </span>
              {isEdited ? (
                <Button
                  type='submit'
                  isDisabled={isDisabled || !isValueModified}
                  className='profile__submit-btn'
                >
                  Сохранить
                </Button>
              ) : (
                <>
                  <Button
                    type='button'
                    className='profile__btn'
                    onClick={enableEditing}
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
                </>
              )}
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
