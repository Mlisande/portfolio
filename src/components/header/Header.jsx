import {React, useContext} from 'react'
import './header.css'
import CTA from './CTA'
import { languageContext } from '../../context/LanguageContext'
import ME from '../../assets/photoProfil.jpg'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'

const Header = () => {
  const { language, toggleLanguage} = useContext(languageContext);
  return (
    <header>
      <div className="container header__language">
        <button className=' btn btn-primary btn-switch' onClick={toggleLanguage}>
          {language === 'fr' ? '🇬🇧' : '🇫🇷' }
        </button>
      </div>
      <div className="container header__container">
        <h5>{language === 'fr' ? 'Bonjour, je suis' : "Hello I'm"}</h5>
        <Typewriter
        onInit={(typewriter) =>{
          typewriter
          .typeString("Mélisande MALONGA")
          .pauseFor(2000)
          .start()
        }}/>
        <h4 className="text-light">{language === 'fr' ? 'Développeuse Front-End' : 'Front-End Developer'} </h4>
        <h5 className='text-light'>{ language === 'fr' ? 'Paris' : 'based in Paris'}</h5>

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

export default Header