import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import './Header.css';

export default function Header({ loggedIn }) {
  const location = useLocation();
  const isPathMain = location.pathname === '/';

  return (
    <header className={`header${isPathMain ? ' header_type_promo' : ''}`}>
      <Logo />
      <Navigation loggedIn={loggedIn} isPathMain={isPathMain} />
    </header>
  );
}
