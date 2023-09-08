import LandingTitle from '../LandingTitle/LandingTitle';
import Portfolio from '../Portfolio/Portfolio';

import photo from '../../images/photo.jpg';

export default function AboutMe() {
  return (
    <section id='about-me' className='about-me app__content'>
      <LandingTitle>Студент</LandingTitle>
      <div className='about-me__container'>
        <img src={photo} alt='Фотография.' className='about-me__photo' />
        <h3 className='about-me__name'>Марина</h3>
        <p className='about-me__position'>Фронтенд-разработчик, 27 лет</p>
        <p className='about-me__bio'>
          Я&nbsp;живу в&nbsp;г.&nbsp;Волжский, закончила факультет психологии
          ЛГУ. У&nbsp;меня есть муж и&nbsp;кошка. Люблю смотреть детективы,
          занимаюсь спортом. Ещё до&nbsp;университета увлекалась версткой. Год
          назад решила сменить профессию и&nbsp;вспомнила, как было интересно
          кодить. Сейчас заканчиваю курс веб-разработки, планирую и&nbsp;дальше
          развиваться как фронтенд-разработчик.
        </p>
        <a
          href='https://github.com/MarinaNasonkina'
          className='about-me__link'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
      <Portfolio />
    </section>
  );
}
