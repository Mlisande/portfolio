import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/melisandemalonga/" target='_blank' rel="noreferrer noopener"><GrLinkedin/></a>
          <a href="https://github.com/Mlisande" target='_blank' rel="noreferrer noopener"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Mélisande MALONGA</small>
        </div>

        
    </footer>
  )
}

export default footer