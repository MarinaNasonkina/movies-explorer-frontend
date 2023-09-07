export default function NavTab() {
  function scrollSmoothly(evt) {
    evt.preventDefault();

    const block = document.querySelector(evt.target.hash);

    block.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <ul className='list nav-tab'>
      <li className='nav-tab__link'>
        <a
          href='#about-project'
          className='link link_in_nav-tab'
          onClick={scrollSmoothly}
        >
          О проекте
        </a>
      </li>
      <li className='nav-tab__link'>
        <a
          href='#techs'
          className='link link_in_nav-tab'
          onClick={scrollSmoothly}
        >
          Технологии
        </a>
      </li>
      <li className='nav-tab__link'>
        <a
          href='#about-me'
          className='link link_in_nav-tab'
          onClick={scrollSmoothly}
        >
          Студент
        </a>
      </li>
    </ul>
  );
}
