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
      {/* utilisation de la balise sémantique section */}
      <p className="section__subtitle">{language === 'fr' ? 'Se familiariser' : 'Get to know'}</p>
      <h2>{language === 'fr' ? 'A propos de moi' : 'About me'}</h2>
      {/*garder la hierarchie des header */}
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" /> {/*image décorative donc alt="" */}
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'> 
                <TbExchange className='about__icon' aria-hidden='true'/>  
                <h3>{language === 'fr' ? 'Reconversion' : 'Retraining'}</h3>
                <small>{language === 'fr' ? 'Du Cinéma au développement web' : 'From Cinema to development web'}</small>
              </article>
              <article className='about__card'>
                <TbSchool className='about__icon' aria-hidden='true'/>
                <h3>{language === 'fr' ? 'Ecole' : 'School'}</h3>
                <small>Ada Tech School</small>
              </article>
              <article className='about__card'>
                <GiStairsGoal className='about__icon' aria-hidden='true'/>
                <h3>{language === 'fr' ? 'Pour devenir' : 'To be'}</h3>
                <small>{language === 'fr' ? 'Développeuse Front-End' :'Front-End Developper'}</small>
              </article>
              </div>
              <p lang={language === 'fr' ? 'fr':'en'}>{language === 'fr' ? 'Je suis développeuse front-end avec une obsession : créer des expériences web à la fois fluides, performantes et captivantes.': 'I’m a front-end developer with one obsession: creating smooth, high-performing, and engaging web experiences.' }</p>
              {/*pour le lecteur d'écran mettre dynamiquement l'attribut lang en fr ou en ?  */}
              <p lang={language === 'fr' ? 'fr':'en'}>{language === 'fr' ?  '✨ Ce que j’aime dans le développement ? Transformer des idées en applications concrètes, explorer de nouvelles technos, et surtout, apprendre et progresser aux côtés d’une équipe motivée. J’aime autant coder des interfaces modernes avec React, Next.js et TypeScript, que concevoir des expériences utilisateur engageantes avec Figma. Côté back, je structure des bases de données solides avec PostgreSQL et veille à la qualité du code en appliquant de bonnes pratiques.': '✨ What drives me in development? Turning ideas into real applications, exploring new technologies, and, most of all, learning and growing with a motivated team. I love building modern interfaces with React, Next.js, and TypeScript, as well as designing engaging user experiences with Figma. On the back end, I structure solid databases with PostgreSQL and ensure clean, maintainable code by following best practices.'}</p>
              <p lang={language === 'fr' ? 'fr':'en'}>{language === 'fr' ? '🎯 Mon objectif ? Rejoindre une équipe qui partage mes valeurs : entraide, exigence et innovation, et contribuer à des projets impactants !' : '🎯 My goal? To join a team that values collaboration, high standards, and innovation—and to contribute to impactful projects!'}</p>
              <a href="#contact" className='btn btn-primary'>{language === 'fr' ? 'Discutons': 'Let\'s Talk'}</a>
          </div>
        </div>
    </section>
  )
}

export default About