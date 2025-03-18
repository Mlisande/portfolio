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
          <h3>Gen Teen Movies</h3>
          <p>GenTeenMovies is a Next.js application that serves as a movie gallery, with data management handled through PostgreSQL and Prisma. </p>
          <p className='portfolio__item-p'>project personnel </p>
          <p className='portfolio__item-p'>Next.js - React.js - Typescript - Material UI - PostgreSQL - Prisma - Jest</p>
          <div className="portfolio_items_cta">
            <div className="portfolio__item-cta">
              <a href="https://github.com/Mlisande/GenTeenMovies" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
            </div>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Mlisande/GenTeenMovies" className='btn' target='_blank' rel="noreferrer noopener">Online</a>
            </div>
          </div>
        </article>
        
      <article className='portfolio__item '>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Samefa</h3>
          <p>SAMEFA is a web application that promotes corporate donations between employers, employees, and nonprofits. </p>
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
          <p>Creation of a dynamic interface representing a typical week at Ada Tech School. </p>
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
          <p>Creation of a furniture sales platform.</p>
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
          <p>Creation of a pixel art video game using Pico-8.</p>
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

