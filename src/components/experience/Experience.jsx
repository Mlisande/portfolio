import {React, useContext} from 'react'
import { languageContext } from '../../context/LanguageContext'
import './experience.css'
import {BsBookmarkCheck} from 'react-icons/bs'

const Experience = () => {
  const {language} = useContext(languageContext);
  return (
    <section id='experience'>
      <h5>{language === 'fr' ? 'Quelles sont mes compétences' : 'What Skills I Have'}</h5>
      <h2>{language === 'fr' ? 'Mes compétences' :'My experience'}</h2>
      <div className="container experience__container">
        <div className="experience__hard">
          <h3>Hard Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>React.js</h4>
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
                <h4>Node.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Next.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>MUI</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Sass</h4>
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
                <h4>Git</h4>
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
                <h4>{language === 'fr' ? 'Curiosité' :'Curiosity'}</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>{language === 'fr' ? 'Empathie' :'Empathy'}</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>Team worker</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>{language === 'fr' ? 'Aisance relationnelle' :'Ease in communication'}</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>{language === 'fr' ? 'Autonomie' :'Autonomy'}</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheck className='experience__details-icon'/>
              <div>
                <h4>{language === 'fr' ? 'Adaptabilité' :'Adaptability'}</h4>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience