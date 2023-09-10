import LandingTitle from '../LandingTitle/LandingTitle';

import './AboutProject.css';

export default function AboutProject() {
  return (
    <section id='about-project' className='about-project'>
      <LandingTitle>О проекте</LandingTitle>
      <div className='about-project__description'>
        <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
        <p className='about-project__text'>
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
        </p>
        <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__text'>
          У каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
        <div className='about-project__time'>
          <h4 className='about-project__subtitle'>1 неделя</h4>
          <p className='about-project__label'>Back-end</p>
          <h4 className='about-project__subtitle about-project__subtitle_type_light'>4 недели</h4>
          <p className='about-project__label'>Front-end</p>
        </div>
      </div>
    </section>
  );
}
