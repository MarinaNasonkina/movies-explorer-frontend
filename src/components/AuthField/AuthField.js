import './AuthField.css';

export default function AuthField({
  label,
  placeholder,
  name,
  type,
  value,
  handleChange,
  isDisabled,
  error,
  ...validationProps
}) {
  return (
    <label className='auth-field'>
      {label}
      <input
        className='auth-field__input'
        placeholder={placeholder}
        name={name}
        type={type}
        value={value || ''}
        onChange={handleChange}
        disabled={isDisabled}
        {...validationProps}
      />
      <span className='auth-field__err'>{error}</span>
    </label>
  );
}
