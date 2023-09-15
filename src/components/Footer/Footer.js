import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__text footer__text_type_title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__container'>
        <p className='footer__text'>&copy; 2023</p>
        <ul className='footer__list'>
          <li className='footer__text'>
            <a
              href='https://practicum.yandex.ru'
              className='footer__link'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__text'>
            <a
              href='https://github.com/MarinaNasonkina'
              className='footer__link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
