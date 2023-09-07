import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn }) {
  const location = useLocation();
  const isPathMain = location.pathname === '/';

  return (
    <header
      className={`header${isPathMain ? ' header_type_promo' : ''} app__content`}
    >
      <Logo />
      <Navigation loggedIn={loggedIn} isPathMain={isPathMain} />
    </header>
  );
}
