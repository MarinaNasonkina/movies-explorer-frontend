import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__text'>
          <a
            href='https://github.com/MarinaNasonkina/how-to-learn'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <div className='portfolio__link-icon'></div>
          </a>
        </li>
        <li className='portfolio__text'>
          <a
            href='https://github.com/MarinaNasonkina/russian-travel'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <div className='portfolio__link-icon'></div>
          </a>
        </li>
        <li className='portfolio__text'>
          <a
            href='https://github.com/MarinaNasonkina/react-mesto-api-full-gha'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <div className='portfolio__link-icon'></div>
          </a>
        </li>
      </ul>
    </section>
  );
}
