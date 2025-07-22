import {React, useContext} from 'react';
import {languageContext} from '../../context/LanguageContext'
import './portfolio.css'
import IMG1 from '../../assets/Dataviz.png'
import IMG2 from '../../assets/castorlama.png'
import IMG3 from '../../assets/pico8.png'
import IMG4 from '../../assets/samefa.png'
import IMG5 from '../../assets/GTM.png'

const Portfolio = () => {
  const {language} = useContext(languageContext);
  return (
    <section id='portfolio'>
      {/* utilisation de la balise sémantique section */}
      <p className='section__subtitle'>{language === 'fr' ? 'Mes projets récents' :'My Recent Work'}</p>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item ' aria-label={language === 'fr' ? "projet GenTeenMovies" : "GenTeenMovies project"}>
          {/* utilisation de la balise sémantique article */}
            <div className="portfolio__item-image">
              <img src={IMG5} alt={language=== 'fr' 
                ? "Capture d’écran de l’application GenTeenMovies" 
                : "Screenshot of the GenTeenMovies app"} />
            </div>
            <h3>Gen Teen Movies</h3>
            <p>
              {language === 'fr' ? 'GenTeenMovies est une application Next.js qui fait office de galerie de films, avec une gestion des données assurée par PostgreSQL et Prisma.' :'GenTeenMovies is a Next.js application that serves as a movie gallery, with data management handled through PostgreSQL and Prisma.'} </p>
            <p className='portfolio__item-p'>{language === 'fr' ? 'projet personnel' : 'personal project'} </p>
            <p className='portfolio__item-p'>Next.js - React.js - Typescript - Material UI - PostgreSQL - Prisma - Jest</p>
            <div className="portfolio_items_cta">
              <div className="portfolio__item-cta">
                <a href="https://github.com/Mlisande/GenTeenMovies" 
                className='btn' 
                target='_blank' 
                rel="noreferrer noopener">
                  Github
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href="https://github.com/Mlisande/GenTeenMovies" 
                className='btn' 
                target='_blank' 
                rel="noreferrer noopener">
                  Online
                </a>
              </div>
            </div>
        </article>
        <article className='portfolio__item ' aria-label={language === 'fr' ? "projet Samefa" : "Samefa project"}>
            <div className="portfolio__item-image">
              <img src={IMG4} alt={language=== 'fr' ? "Capture d'écran de l'application SAMEFA" : 'Screenshot of SAMEFA app'} />
            </div>
            <h3>Samefa</h3>
            <p>{language === 'fr' ? 'SAMEFA est une application web qui encourage les dons en entreprise entre employeurs, employés et associations.' :'SAMEFA is a web application that promotes corporate donations between employers, employees, and nonprofits.'} </p>
            <p className='portfolio__item-p'>{language === 'fr' ? '2 personnes' :'2 team members'} </p>
            <p className='portfolio__item-p'>React - SASS - Nodejs - Expressjs - PostgreSQL - Jest</p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Mlisande/SAMEFA_PROJECT" 
                className='btn' 
                target='_blank' 
                rel="noreferrer noopener">
                  Github
              </a>
            </div>
        </article>
        <article className='portfolio__item ' aria-label={language=== 'fr' ? "projet Dataviz" : "Dataviz project"}>
          <div className="portfolio__item-image">
            <img src={IMG1} alt={language==='fr' ? "Capture d'écran de l'interface Dataviz" : "Screenshot of Dataviz interface"} />
          </div>
          <h3>Dataviz</h3>
          <p>{language === 'fr' ? 'Création d\'une interface dynamique représentant une semaine type à Ada Tech School.' : 'Creation of a dynamic interface representing a typical week at Ada Tech School.'} </p>
          <p className='portfolio__item-p'>{language === 'fr' ? '2 semaines' :'2 weeks'}  </p>
          <p className='portfolio__item-p'>{language === 'fr' ? '3 personnes' :'3 team members'}  </p>
          <p className='portfolio__item-p'>HTML - CSS - JS</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Mlisande/Dataviz-MJM" 
              className='btn' 
              target='_blank' 
              rel="noreferrer noopener">
                Github
            </a>
          </div>
        </article>
        <article className='portfolio__item ' aria-label={language === 'fr' ? "projet d'étude Castorlama" : "School project Castorlama"}>
          <div className="portfolio__item-image">
            <img src={IMG2} alt={language === 'fr' ? "Capture d'écran de l'application Castorlama": "Screenshot of Castorlama app"} />
          </div>
          <h3>Castorlama</h3>
          <p>{language === 'fr' ? 'Création d\'une plateforme d\'une vente de meubles.' : 'Creation of a furniture sales platform.'}</p>
          <p className='portfolio__item-p'>{language === 'fr' ? '2 semaines' :'2 weeks'} </p>
          <p className='portfolio__item-p'>{language === 'fr' ? '7 personnes' :'7 team members'} </p>
          <p className='portfolio__item-p'>JS - React - SQ</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Mlisande/PC-CastorlamaFront2" 
              className='btn' 
              target='_blank' 
              rel="noreferrer noopener">
                Github
            </a>
          </div>
        </article>
        <article className='portfolio__item ' aria-label={language === 'fr' ? "Projet d'étude Survivor" : "School project Castorlama"}>
          <div className="portfolio__item-image">
            <img src={IMG3} alt={language === 'fr' ? "Capture d'écran de jeu en pixel Survivor": "Screenshot of pixel video game Survivor"} />
          </div>
          <h3>Survival</h3>
          <p>{language === 'fr' ? 'Création d\'un jeu video en pixel avec Pico-8' : 'Creation of a pixel art video game using Pico-8.'}</p>
          <p className='portfolio__item-p'>{language === 'fr' ? '2 semaines' :'2 weeks'} </p>
          <p className='portfolio__item-p'>{language === 'fr' ? '3 personnes' :'3 team members'} </p>
          <p className='portfolio__item-p'>LUA</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Mlisande/projet_collectif_pico_8-melisandre-khalifa-audrey" 
              className='btn' 
              target='_blank' 
              rel="noreferrer noopener">
                Github
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio

