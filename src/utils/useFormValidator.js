import { useState } from 'react';

import { MSG_NAME_FORMAT, MSG_EMAIL_FORMAT } from './constants';

export default function useFormValidator() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });

    if (e.target.validity.patternMismatch) {
      const formatMessage = e.target.name === 'name' ? MSG_NAME_FORMAT : MSG_EMAIL_FORMAT;
      setErrors({ ...errors, [e.target.name]: formatMessage });
    } else {
      setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    }

    setIsDisabled(!e.target.form.checkValidity());
  }

  return {
    values,
    setValues,
    errors,
    isDisabled,
    handleChange,
  };
}
