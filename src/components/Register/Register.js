import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../Auth/Auth';
import AuthField from '../AuthField/AuthField';

import mainApi from '../../utils/MainApi';
import useFormValidator from '../../utils/useFormValidator';
import handleErr from '../../utils/handleErr';

export default function Register({ onRegister }) {
  const navigate = useNavigate();
  const [submitErr, setSubmitErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { values, errors, isDisabled, handleChange } = useFormValidator();
  const { name, email, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then((userData) => {
        onRegister(userData);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        handleErr(err, setSubmitErr);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Auth
      title='Добро пожаловать!'
      formName='sign-up'
      onSubmit={handleSubmit}
      submitErr={submitErr}
      isDisabled={isDisabled || isLoading}
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
        isDisabled={isLoading}
        error={errors.name}
        pattern='^[a-zA-Zа-яА-ЯёЁ\- ]+$'
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
        isDisabled={isLoading}
        error={errors.email}
        pattern='[\w.\-]+@[a-zA-Z0-9\-]+\.[a-z]{2,}'
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
        isDisabled={isLoading}
        error={errors.password}
        minLength='6'
        maxLength='40'
        autoComplete='off'
        required
      />
    </Auth>
  );
}
