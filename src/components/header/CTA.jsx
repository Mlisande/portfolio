import {React, useContext} from 'react'
import { languageContext } from '../../context/LanguageContext'
import CV from '../../assets/MelisandeMalonga_CV_F.pdf'

const CTA = () => {
  const {language} = useContext(languageContext);
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{language === 'fr' ? 'Télécharger mon CV': 'Download CV'}</a>
        <a href="#contact" className='btn btn-primary'>{language === 'fr' ? 'Discutons' : "Let's Talk"}</a>
    </div>
  )
}

export default CTA