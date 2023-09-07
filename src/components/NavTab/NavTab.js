export default function NavTab() {
  function scrollSmoothly(evt) {
    evt.preventDefault();

    const block = document.querySelector(evt.target.hash);

    block.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <ul className='nav-tab'>
      <li className='nav-tab__text'>
        <a
          href='#about-project'
          className='nav-tab__link'
          onClick={scrollSmoothly}
        >
          О проекте
        </a>
      </li>
      <li className='nav-tab__text'>
        <a
          href='#techs'
          className='nav-tab__link'
          onClick={scrollSmoothly}
        >
          Технологии
        </a>
      </li>
      <li className='nav-tab__text'>
        <a
          href='#about-me'
          className='nav-tab__link'
          onClick={scrollSmoothly}
        >
          Студент
        </a>
      </li>
    </ul>
  );
}
