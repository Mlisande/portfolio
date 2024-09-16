import React from 'react'
import './about.css';
import ME from '../../assets/Illustration.jpg'
import {TbExchange} from 'react-icons/tb'
import {TbSchool} from 'react-icons/tb'
import {GiStairsGoal} from 'react-icons/gi'


const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
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
                <h5>Retraining</h5>
                <small>From Cinema to development web</small>
              </article>

              <article className='about__card'>
                <TbSchool className='about__icon'/>
                <h5>School</h5>
                <small>Student at Ada Tech School</small>
              </article>

              <article className='about__card'>
                <GiStairsGoal className='about__icon'/>
                <h5>To be</h5>
                <small>Full-Stack Developper</small>
              </article>
              </div>

              <p>Bonjour, je suis Mélisande, développeuse depuis janvier 2022 ! </p>
              <p>Titulaire du Titre Professionnel de Concepteur Développeur d'Applications, je suis actuellement en recherche d'un poste en CDI. Je viens également de terminer une année très enrichissante en tant que développeuse full stack chez Palo IT, où j'ai eu l'opportunité de contribuer à des projets variés, notamment dans la conception et le développement d’applications utilisant des technologies telles que React.js, TypeScript, Python, Docker, et AWS. </p>
              <p>Mon parcours dans le développement web découle de ma volonté constante d'apprendre et de ma passion pour la technologie. J'apprécie tout autant travailler en équipe que de créer des expériences en ligne captivantes, aussi bien du côté front-end que du côté back-end. J'utilise HTML5, CSS, JavaScript, Reactjs, Nodejs, SQL ou encore Nextjs  pour développer des applications web. Je crée également des wireframes etdes maquettes avec Figma et Canva.</p>
              <p>À la recherche d'une opportunité stimulante dans un environnement qui favorise le partage de connaissance, je suis prête à m'investir activement au sein d'une équipe dynamique.</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            

          </div>
        </div>
    </section>
  )
}

export default about