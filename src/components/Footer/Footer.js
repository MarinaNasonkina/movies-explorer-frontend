export default function Footer() {
  return (
    <footer className='footer app__content'>
      <p className='footer__text footer__text_type_title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__text'>&copy; 2023</p>
        <ul className='list footer__list'>
          <li className='footer__text'>
            <a
              href='https://practicum.yandex.ru'
              className='link'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__text'>
            <a
              href='https://github.com/MarinaNasonkina'
              className='link'
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
