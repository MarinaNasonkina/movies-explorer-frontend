import { Link } from 'react-router-dom';
import './Logo.css';

export default function Logo() {
  return (
    <Link to='/' aria-label='О проекте.' className='logo' />
  );
}