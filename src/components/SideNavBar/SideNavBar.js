import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import useAdditionalClose from '../../utils/useAdditionalClose';

export default function SideNavBar({ isPathMain }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const addLinkActive = ({ isActive }) =>
    `link link_in_side-nav${isActive ? ' link_active' : ''}`;

  function toggleIsNavOpen() {
    setIsNavOpen(!isNavOpen);
  }

  useAdditionalClose(isNavOpen, toggleIsNavOpen, 'side-nav');

  return (
    <>
      <button
        className='btn navigation__menu-btn'
        aria-label='Открыть меню.'
        onClick={toggleIsNavOpen}
      ></button>
      <div className={`side-nav${isNavOpen ? ' side-nav_opened' : ''}`}>
        <div
          className={`slide-from-right side-nav__container${
            isPathMain ? ' side-nav__container_type_promo' : ''
          }`}
        >
          <button
            className='btn side-nav__close-btn'
            aria-label='Закрыть меню.'
            onClick={toggleIsNavOpen}
          ></button>
          <ul className='list side-nav__menu'>
            <li className='side-nav__link'>
              <NavLink to='/' className={addLinkActive}>
                Главная
              </NavLink>
            </li>
            <li className='side-nav__link'>
              <NavLink to='/movies' className={addLinkActive}>
                Фильмы
              </NavLink>
            </li>
            <li className='side-nav__link'>
              <NavLink to='/saved-movies' className={addLinkActive}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link to='/profile' className='link profile'>
            Аккаунт
            <div
              className={`profile__icon${
                isPathMain ? ' profile__icon_type_promo' : ''
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </>
  );
}
