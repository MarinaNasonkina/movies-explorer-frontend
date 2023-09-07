import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Button from '../Button/Button';

import useAdditionalClose from '../../utils/useAdditionalClose';

export default function SideNavBar({ isPathMain }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const addLinkActive = ({ isActive }) =>
    `side-nav__link${isActive ? ' side-nav__link_active' : ''}`;

  function toggleIsNavOpen() {
    setIsNavOpen(!isNavOpen);
  }

  useAdditionalClose(isNavOpen, toggleIsNavOpen, 'side-nav');

  return (
    <>
      <Button
        className='navigation__menu-btn'
        ariaLabel='Открыть меню.'
        onClick={toggleIsNavOpen}
      />
      <div className={`side-nav${isNavOpen ? ' side-nav_opened' : ''}`}>
        <div
          className={`side-nav__container${
            isPathMain ? ' side-nav__container_type_promo' : ''
          }`}
        >
          <Button
            className='side-nav__close-btn'
            ariaLabel='Закрыть меню.'
            onClick={toggleIsNavOpen}
          />
          <ul className='side-nav__menu'>
            <li className='side-nav__text'>
              <NavLink to='/' className={addLinkActive}>
                Главная
              </NavLink>
            </li>
            <li className='side-nav__text'>
              <NavLink to='/movies' className={addLinkActive}>
                Фильмы
              </NavLink>
            </li>
            <li className='side-nav__text'>
              <NavLink to='/saved-movies' className={addLinkActive}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link to='/profile' className='side-nav__profile'>
            Аккаунт
            <div
              className={`side-nav__profile-icon${
                isPathMain ? ' side-nav__profile-icon_type_promo' : ''
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </>
  );
}
