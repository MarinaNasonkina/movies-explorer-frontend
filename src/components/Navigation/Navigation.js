import { NavLink, Link, useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import SideNavBar from '../SideNavBar/SideNavBar';

import './Navigation.css';

export default function Navigation({ loggedIn, isPathMain }) {
  const addLinkActive = ({ isActive }) =>
    `navigation__link${isActive ? ' navigation__link_active' : ''}`;

  const navigate = useNavigate();

  function goToSignIn() {
    navigate('/signin');
  }

  return loggedIn ? (
    <nav className='navigation'>
      <ul className='navigation__menu'>
        <li className='navigation__text'>
          <NavLink to='/movies' className={addLinkActive}>
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__text'>
          <NavLink to='/saved-movies' className={addLinkActive}>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <Link to='/profile' className='navigation__profile'>
        Аккаунт
        <div
          className={`navigation__profile-icon${
            isPathMain ? ' navigation__profile-icon_type_promo' : ''
          }`}
        ></div>
      </Link>
      <SideNavBar isPathMain={isPathMain} />
    </nav>
  ) : (
    <nav className='navigation navigation_unauthorized'>
      <Link to='/signup' className='navigation__auth-link'>
        Регистрация
      </Link>
      <Button type='button' className='navigation__btn' onClick={goToSignIn}>
        Войти
      </Button>
    </nav>
  );
}
