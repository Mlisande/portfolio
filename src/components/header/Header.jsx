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
    <header role="banner"> 
    {/* utilisation de la balise sémantique header  */}
      <div className="container header__language">
        <button className=' btn btn-primary btn-switch' onClick={toggleLanguage}>
          {language === 'fr' ? '🇬🇧' : '🇫🇷' }
        </button>
      </div>
      <div className="container header__container">
        <p>{language === 'fr' ? 'Bonjour, je suis' : "Hello I'm"}</p>
        <h1>
        <Typewriter
        onInit={(typewriter) =>{
          typewriter
          .typeString("Mélisande MALONGA")
          .pauseFor(2000)
          .start()
        }}/>
        </h1>
        <h2 className="text-light">{language === 'fr' ? 'Développeuse Front-End' : 'Front-End Developer'} </h2>
        <p className='text-light'>{ language === 'fr' ? 'Paris' : 'based in Paris'}</p>
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