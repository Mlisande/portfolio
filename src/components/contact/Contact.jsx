import {React, useContext} from 'react';
import {languageContext} from '../../context/LanguageContext'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
//import {BsTelephone} from 'react-icons/bs'


const Contact = () => {
  const {language} = useContext(languageContext)
  return (
    <section id='contact'>
      <h5>{language === 'fr' ? 'Restons en contact' :'Get In Touch'}</h5>
      <h2>{language === 'fr' ? 'Contactez-moi' : 'Contact Me'}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>melisande.malonga@gmail.com</h5>
            <a href="mailto:melisande.malonga@gmail.com" target="_blank" rel="noopener noreferrer">{language === 'fr' ? 'Envoyez-moi un message' :'Send message'}</a>
          </article>
         
        </div>
      </div>
      
      
    </section>
  )
}

export default Contact