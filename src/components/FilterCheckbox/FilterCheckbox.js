import './FilterCheckbox.css';

export default function FilterCheckbox({ value, onChange }) {
  return (
    <label className='filter'>
      <input
        type='checkbox'
        checked={value}
        onChange={onChange}
        className='filter__checkbox'
      />
      Короткометражки
    </label>
  );
}
