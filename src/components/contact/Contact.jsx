import {React, useContext} from 'react';
import {languageContext} from '../../context/LanguageContext'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
//import {BsTelephone} from 'react-icons/bs'

const Contact = () => {
  const {language} = useContext(languageContext)
  return (
    <section id='contact'>
      <p className='section__subtitle'>{language === 'fr' ? 'Restons en contact' :'Get In Touch'}</p>
      <h2>{language === 'fr' ? 'Contactez-moi' : 'Contact Me'}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' aria-hidden='true'/>
            {/*mettre un aria-hidden en true pour l'îcone ?  */}
            <h3>Email</h3>
            <p>melisande.malonga@gmail.com</p>
            <a href="mailto:melisande.malonga@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer">
                {language === 'fr' ? 'Envoyez-moi un message' :'Send message'}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact