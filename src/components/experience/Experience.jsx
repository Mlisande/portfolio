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
                <h4>React</h4>
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
                <h4>Curiosity</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Empathy</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Team Worker</h4>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default experience