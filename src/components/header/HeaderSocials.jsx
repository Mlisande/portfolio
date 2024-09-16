import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/melisandemalonga/" target='_blank' rel="noreferrer noopener"><GrLinkedin/></a>
    <a href="https://github.com/Mlisande" target='_blank' rel="noreferrer noopener"><BsGithub/></a>
     
    </div>
  )
}

export default HeaderSocials