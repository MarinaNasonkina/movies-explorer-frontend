import { useNavigate } from 'react-router-dom';

import Auth from '../Auth/Auth';
import AuthField from '../AuthField/AuthField';

import useFormValidator from '../../utils/useFormValidator';

export default function Login({ onLogin }) {
  const { values, errors, isDisabled, handleChange } = useFormValidator();
  const { email, password } = values;

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
      isDisabled={isDisabled}
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
        value={email}
        handleChange={handleChange}
        error={errors.email}
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
        value={password}
        handleChange={handleChange}
        error={errors.password}
        minLength='6'
        maxLength='40'
        autoComplete='current-password'
        required
      />
    </Auth>
  );
}
