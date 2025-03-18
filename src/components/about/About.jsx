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

              <p>I’m a full-stack developer with one obsession: creating smooth, high-performing, and engaging web experiences. </p>
              <p>✨ What drives me in development? Turning ideas into real applications, exploring new technologies, and, most of all, learning and growing with a motivated team. I love building modern interfaces with React, Next.js, and TypeScript, as well as designing engaging user experiences with Figma. On the back end, I structure solid databases with PostgreSQL and ensure clean, maintainable code by following best practices.</p>
              <p>🎯 My goal? To join a team that values collaboration, high standards, and innovation—and to contribute to impactful projects! </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            

          </div>
        </div>
    </section>
  )
}

export default about