import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'


const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>melisande.malonga@gmail.com</h5>
            <a href="mailto:melisande.malonga@gmail.com" target="_blank">Send message</a>
          </article>
         
        </div>
      </div>
      
      
    </section>
  )
}

export default contact