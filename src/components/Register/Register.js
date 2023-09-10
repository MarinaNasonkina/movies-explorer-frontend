import { useNavigate } from 'react-router-dom';

import Auth from '../Auth/Auth';
import AuthField from '../AuthField/AuthField';

export default function Register({ onRegister }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister();
    navigate('/movies', { replace: true });
  }

  return (
    <Auth
      title='Добро пожаловать!'
      formName='sign-up'
      onSubmit={handleSubmit}
      submitText='Зарегистрироваться'
      subtitleText='Уже зарегистрированы?'
      linkPath='/signin'
      linkText='Войти'
    >
      <AuthField
        label='Имя'
        placeholder='Введите имя'
        name='name'
        type='text'
        error=''
        minLength='2'
        maxLength='30'
        autoComplete='name'
        required
      />
      <AuthField
        label='E-mail'
        placeholder='Введите e-mail'
        name='email'
        type='email'
        error=''
        minLength='6'
        maxLength='64'
        autoComplete='email'
        required
      />
      <AuthField
        label='Пароль'
        placeholder='Введите пароль'
        name='password'
        type='password'
        error=''
        minLength='6'
        maxLength='40'
        autoComplete='new-password'
        required
      />
    </Auth>
  );
}
