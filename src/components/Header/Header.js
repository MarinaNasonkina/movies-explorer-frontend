import { useLocation, Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn }) {
  const location = useLocation();
  const isPathMain = location.pathname === '/';

  return (
    <header
      className={`header${isPathMain ? ' header_type_promo' : ''} app__content`}
    >
      <Link to='/' aria-label='О проекте.' className='link logo' />
      <Navigation loggedIn={loggedIn} isPathMain={isPathMain} />
    </header>
  );
}
