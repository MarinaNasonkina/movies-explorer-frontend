import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';

import './Auth.css';

export default function Auth({
  title,
  formName,
  onSubmit,
  submitErr,
  isDisabled,
  submitText,
  subtitleText,
  linkPath,
  linkText,
  children,
}) {
  const [isErrVisible, setIsErrVisible] = useState(false);

  useEffect(() => {
    if (submitErr) {
      setIsErrVisible(true);
      setTimeout(() => {
        setIsErrVisible(false);
      }, 2700);
    }
  }, [submitErr]);

  return (
    <main className='auth'>
      <section className='auth__container'>
        <Logo />
        <h1 className='auth__title'>{title}</h1>
        <form
          method='post'
          name={formName}
          onSubmit={onSubmit}
          className='auth__form'
          noValidate
        >
          <div className='auth__fields'>{children}</div>
          <div className='auth__submit-box'>
            <span
              className={`auth__submit-err${
                isErrVisible ? ' auth__submit-err_visible' : ''
              }`}
            >
              {submitErr}
            </span>
            <Button
              type='submit'
              isDisabled={isDisabled}
              className='auth__submit-btn'
            >
              {submitText}
            </Button>
          </div>
        </form>
        <p className='auth__subtitle'>
          {subtitleText}
          <Link to={linkPath} className='auth__link'>
            {linkText}
          </Link>
        </p>
      </section>
    </main>
  );
}
