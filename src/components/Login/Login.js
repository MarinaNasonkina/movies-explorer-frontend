import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../Auth/Auth';
import AuthField from '../AuthField/AuthField';

import mainApi from '../../utils/MainApi';
import useFormValidator from '../../utils/useFormValidator';
import handleErr from '../../utils/handleErr';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [submitErr, setSubmitErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { values, errors, isDisabled, handleChange } = useFormValidator();
  const { email, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((userData) => {
        onLogin(userData);
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
      title='Рады видеть!'
      formName='sign-in'
      onSubmit={handleSubmit}
      submitErr={submitErr}
      isDisabled={isDisabled || isLoading}
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
        autoComplete='current-password'
        required
      />
    </Auth>
  );
}
