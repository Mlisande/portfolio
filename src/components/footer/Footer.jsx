import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* utilisation de la balise sémantique footer */}
      <nav className='nav__footer' aria-label='Footer'>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a 
            href="https://www.linkedin.com/in/melisandemalonga/" 
            target='_blank' 
            rel="noreferrer noopener"
            aria-label=' Visit my Linkidin Profile'>
              <GrLinkedin aria-hidden='true'/>
            </a>
          <a 
            href="https://github.com/Mlisande" 
            target='_blank' 
            rel="noreferrer noopener"
            aria-label='Visit my Github Profile'>
              <BsGithub aria-hidden='true'/>
            </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Mélisande MALONGA</small>
        </div> 
    </nav> 
    </footer>
  )
}

export default Footer