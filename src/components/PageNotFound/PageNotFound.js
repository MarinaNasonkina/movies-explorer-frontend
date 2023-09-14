import { useNavigate, Link } from 'react-router-dom';

import './PageNotFound.css';

export default function PageNotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <main className='page-not-found'>
      <h1 className='page-not-found__title'>404</h1>
      <p className='page-not-found__subtitle'>Страница не найдена</p>
      <Link onClick={goBack} to='#' className='page-not-found__link'>
        Назад
      </Link>
    </main>
  );
}
