import { NavLink, Link } from 'react-router-dom';

import SideNavBar from '../SideNavBar/SideNavBar';

export default function Navigation({ loggedIn, isPathMain }) {
  const addLinkActive = ({ isActive }) =>
    `link${isActive ? ' link_active' : ''}`;

  return loggedIn ? (
    <nav className='navigation'>
      <ul className='list navigation__menu'>
        <li className='navigation__link'>
          <NavLink to='/movies' className={addLinkActive}>
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__link'>
          <NavLink to='/saved-movies' className={addLinkActive}>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <Link to='/profile' className='link profile navigation__profile'>
        Аккаунт
        <div
          className={`profile__icon${
            isPathMain ? ' profile__icon_type_promo' : ''
          }`}
        ></div>
      </Link>
      <SideNavBar isPathMain={isPathMain} />
    </nav>
  ) : (
    <nav className='navigation navigation_unauthorized'>
      <Link to='/signup' className='link navigation__auth-link'>
        Регистрация
      </Link>
      <Link to='/signin' className='btn btn_type_signin navigation__auth-link'>
        Войти
      </Link>
    </nav>
  );
}
