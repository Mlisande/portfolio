import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Dataviz.png'
import IMG2 from '../../assets/castorlama.png'
import IMG3 from '../../assets/pico8.png'
import IMG4 from '../../assets/samefa.png'
import IMG5 from '../../assets/GTM.png'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item '>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Gen Teen Movie</h3>
          <p>GenTeenMovies est une application Next.js proposant des informations sur les films, avec gestion des données via PostgreSQL et Prisma.  </p>
          <p className='portfolio__item-p'>project personnel </p>
          <p className='portfolio__item-p'>Next.js - React.js - Typescript - Material UI - PostgreSQL - Prisma - Jest</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Mlisande/GenTeenMovies" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
          </div>
        </article>
        
      <article className='portfolio__item '>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Samefa</h3>
          <p>Création d'une application web dans le cadre de la préparation au titre RNCP Concepteur Développeur d'Applications </p>
          <p className='portfolio__item-p'>2 personnes </p>
          <p className='portfolio__item-p'>React - SASS - Nodejs - Expressjs - PostgreSQL - Jest</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Mlisande/SAMEFA_PROJECT" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
          </div>
        </article>
        <article className='portfolio__item '>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Dataviz</h3>
          <p>Création d'une interface dynamique avec une API </p>
          <p className='portfolio__item-p'>2 semaines </p>
          <p className='portfolio__item-p'>3 personnes </p>
          <p className='portfolio__item-p'>HTML - CSS - JS</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Mlisande/Dataviz-MJM" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
          </div>
        </article>
        <article className='portfolio__item '>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Castorlama</h3>
          <p>Création d'une plateforme de vente de meuble</p>
          <p className='portfolio__item-p'>2 semaines </p>
          <p className='portfolio__item-p'>7 personnes </p>
          <p className='portfolio__item-p'>JS - React - SQ</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Mlisande/PC-CastorlamaFront2" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
          </div>
        </article>
        <article className='portfolio__item '>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Survival</h3>
          <p>Création d'un jeu vidéo en pixel avec Pico-8</p>
          <p className='portfolio__item-p'>2 semaines </p>
          <p className='portfolio__item-p'>3 personnes </p>
          <p className='portfolio__item-p'>LUA</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Mlisande/projet_collectif_pico_8-melisandre-khalifa-audrey" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default portfolio