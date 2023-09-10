import LandingTitle from '../LandingTitle/LandingTitle';

import './Techs.css';

export default function Techs() {
  return (
    <section id='techs' className='techs'>
      <LandingTitle>Технологии</LandingTitle>
      <div className='techs__container'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__list'>
          <li className='techs__text'>HTML</li>
          <li className='techs__text'>CSS</li>
          <li className='techs__text'>JS</li>
          <li className='techs__text'>React</li>
          <li className='techs__text'>Git</li>
          <li className='techs__text'>Express.js</li>
          <li className='techs__text'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
