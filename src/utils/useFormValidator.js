import { useState } from 'react';

export default function useFormValidator() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
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
