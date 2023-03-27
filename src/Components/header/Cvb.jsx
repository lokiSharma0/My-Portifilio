import React from 'react'
import CV from '../../assets/loki_resume.pdf'
import './header.css'
 const Cvb = () => {
  return (
    <div className='cvb-main-div'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn' href='#contact'>Have Talk </a>
    </div>
  )
}
export default Cvb