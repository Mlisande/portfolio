import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photoProfil.jpg'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <Typewriter
        onInit={(typewriter) =>{
          typewriter
          .typeString("Mélisande MALONGA")
          .pauseFor(2000)
          .start()
        }}/>
        <h4 className="text-light">Junior Full-Stack Developer </h4>
        <h5 className='text-light'>based in Paris</h5>

        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header