import {React, useContext} from 'react'
import {languageContext} from '../../context/LanguageContext'
import './about.css';
import ME from '../../assets/Illustration.jpg'
import {TbExchange} from 'react-icons/tb'
import {TbSchool} from 'react-icons/tb'
import {GiStairsGoal} from 'react-icons/gi'


const About = () => {
  const {language} = useContext(languageContext);
  return (
    <section id='about'>
      <h5>{language === 'fr' ? 'Se familiariser' : 'Get to know'}</h5>
      <h2>{language === 'fr' ? 'A propos de moi' : 'About me'}</h2>
        <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about_img" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <TbExchange className='about__icon'/>
                <h5>{language === 'fr' ? 'Reconversion' : 'Retraining'}</h5>
                <small>{language === 'fr' ? 'Du Cinema au développement web' : 'From Cinema to development web'}</small>
              </article>

              <article className='about__card'>
                <TbSchool className='about__icon'/>
                <h5>{language === 'fr' ? 'Ecole' : 'School'}</h5>
                <small>Ada Tech School</small>
              </article>

              <article className='about__card'>
                <GiStairsGoal className='about__icon'/>
                <h5>{language === 'fr' ? 'Pour devenir' : 'To be'}</h5>
                <small>{language === 'fr' ? 'Développeuse Full-Stack' :'Full-Stack Developper'}</small>
              </article>
              </div>

              <p>{language === 'fr' ? 'Je suis développeuse full-stack avec une obsession : créer des expériences web à la fois fluides, performantes et captivantes.': 'I’m a full-stack developer with one obsession: creating smooth, high-performing, and engaging web experiences.' }</p>
              <p>{language === 'fr' ?  '✨ Ce que j’aime dans le développement ? Transformer des idées en applications concrètes, explorer de nouvelles technos, et surtout, apprendre et progresser aux côtés d’une équipe motivée. J’aime autant coder des interfaces modernes avec React, Next.js et TypeScript, que concevoir des expériences utilisateur engageantes avec Figma. Côté back, je structure des bases de données solides avec PostgreSQL et veille à la qualité du code en appliquant de bonnes pratiques.': '✨ What drives me in development? Turning ideas into real applications, exploring new technologies, and, most of all, learning and growing with a motivated team. I love building modern interfaces with React, Next.js, and TypeScript, as well as designing engaging user experiences with Figma. On the back end, I structure solid databases with PostgreSQL and ensure clean, maintainable code by following best practices.'}</p>
              <p>{language === 'fr' ? '🎯 Mon objectif ? Rejoindre une équipe qui partage mes valeurs : entraide, exigence et innovation, et contribuer à des projets impactants !' : '🎯 My goal? To join a team that values collaboration, high standards, and innovation—and to contribute to impactful projects!'}</p>
              <a href="#contact" className='btn btn-primary'>{language === 'fr' ? 'Discutons': 'Let\'s Talk'}</a>
          </div>
        </div>
    </section>
  )
}

export default About