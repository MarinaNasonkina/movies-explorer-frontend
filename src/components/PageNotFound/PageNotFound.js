import { useNavigate, Link } from 'react-router-dom';

import './PageNotFound.css';

export default function PageNotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1, { replace: true });
  }

  return (
    <main className='page-not-found'>
      <section className='page-not-found__container'>
        <h1 className='page-not-found__title'>404</h1>
        <p className='page-not-found__subtitle'>Страница не найдена</p>
        <Link onClick={goBack} to='#' className='page-not-found__link'>
          Назад
        </Link>
      </section>
    </main>
  );
}
