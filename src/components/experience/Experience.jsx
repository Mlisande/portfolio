import React from 'react'
import './experience.css'
import {BsBookmarkCheck} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__hard">
          <h3>Hard Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Reactjs</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Nodejs</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Nextjs</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Material UI</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Jest</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Github</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__soft">
        <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Communication</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Curiosité</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Empathie</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Travail en équipe</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Aisance relationnelle</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Autonomie</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Esprit d'organisation</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Adaptabilité</h4>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default experience