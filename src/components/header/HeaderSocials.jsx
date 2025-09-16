import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/melisandemalonga/" aria-label="Visit my LinkedIn profile" target='_blank' rel="noreferrer noopener"><GrLinkedin aria-hidden='true'/></a>
    <a href="https://github.com/Mlisande" aria-label="Visit my Github profile" target='_blank' rel="noreferrer noopener"><BsGithub aria-hidden='true'/></a> 
    </div>
  )
}

export default HeaderSocials