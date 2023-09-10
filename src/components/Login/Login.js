import { useNavigate } from 'react-router-dom';

import Auth from '../Auth/Auth';
import AuthField from '../AuthField/AuthField';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
    navigate('/movies', { replace: true });
  }

  return (
    <Auth
      title='Рады видеть!'
      formName='sign-in'
      onSubmit={handleSubmit}
      submitText='Войти'
      subtitleText='Ещё не зарегистрированы?'
      linkPath='/signup'
      linkText='Регистрация'
    >
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
