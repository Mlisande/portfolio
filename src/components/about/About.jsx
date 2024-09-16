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
              <img src={ME} alt="about image" />
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
                <small>Software Developper Front-end</small>
              </article>
              </div>

              <p>Je m'appelle Mélisande MALONGA, une jeune femme pleine d'énergie, curieuse et dynamique. Je suis passionnée par l'idée d'apprendre de nouvelles choses et je suis en quête de challenges à relever.</p>
              <p> Au carrefour d'une reconversion professionnelle, je souhaite m'investir au sein d'une entreprise humaine et ambitieuse. J'utilise HTML5, CSS, JavaScript et ReactJS  pour développer des interfaces web. Je crée également des wireframes avec des design softwares comme Figma et Canva.</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            

          </div>
        </div>
    </section>
  )
}

export default about