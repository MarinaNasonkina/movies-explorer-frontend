export default function NavTab() {
  return (
    <ul className='list nav-tab'>
      <li className='nav-tab__link'>
        <a href='#about-project' className='link link_in_nav-tab'>
          О проекте
        </a>
      </li>
      <li className='nav-tab__link'>
        <a href='#techs' className='link link_in_nav-tab'>
          Технологии
        </a>
      </li>
      <li className='nav-tab__link'>
        <a href='#about-me' className='link link_in_nav-tab'>
          Студент
        </a>
      </li>
    </ul>
  );
}
