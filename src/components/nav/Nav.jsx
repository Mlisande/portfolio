import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
//import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav ] = useState('#')
  return (
    <nav className='nav__main' role="navigation" aria-label="main navigation">
      <a 
        href="#" onClick={() => setActiveNav('#')} 
        className={activeNav === 'a' ? 'active': ''}
        aria-label='Acceuil'>
          <AiOutlineHome aria-hidden='true'/>
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active': ''}
        aria-label='A propos'>
          <AiOutlineUser aria-hidden='true'/>
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active': ''}
        aria-label="Expérience">
          <FiBookOpen aria-hidden="true"/></a>
      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active': ''}
        aria-label='Contact'>
          <BiMessageSquareDetail aria-hidden='true'/></a>
    </nav>
  )
}

export default Nav