import { useNavigate } from 'react-router-dom';

import Auth from '../Auth/Auth';
import AuthField from '../AuthField/AuthField';

import useFormValidator from '../../utils/useFormValidator';

export default function Register({ onRegister }) {
  const { values, errors, isDisabled, handleChange } = useFormValidator();
  const { name, email, password } = values;

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
      isDisabled={isDisabled}
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
        value={name}
        handleChange={handleChange}
        error={errors.name}
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
        autoComplete='off'
        required
      />
    </Auth>
  );
}
