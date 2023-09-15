import { NavLink, Link } from 'react-router-dom';

import SideNavBar from '../SideNavBar/SideNavBar';

import './Navigation.css';

export default function Navigation({ loggedIn, isPathMain }) {
  const addLinkActive = ({ isActive }) =>
    `navigation__link${isActive ? ' navigation__link_active' : ''}`;

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
      <Link
        to='/profile'
        className={`navigation__profile${
          isPathMain ? ' navigation__profile_type_promo' : ''
        }`}
      >
        Аккаунт
      </Link>
      <SideNavBar isPathMain={isPathMain} />
    </nav>
  ) : (
    <nav className='navigation navigation_unauthorized'>
      <Link to='/signup' className='navigation__auth-link'>
        Регистрация
      </Link>
      <Link
        to='/signin'
        className='navigation__auth-link navigation__auth-link_type_signin'
      >
        Войти
      </Link>
    </nav>
  );
}
