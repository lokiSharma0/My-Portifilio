import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'
export const About = () => {
  return (
    <section id='about'>
      <div className='intro'>
     <h5>Get to Know </h5>
     <h2>About Me</h2>
      </div>
     <div className=' container about-me'>
      <div className="about_me_cardholder">
      <article className='about_card'> 
      <FaAward className='about_icon' size={40} color='green'/>
       <h5>Experience</h5>
       <small>1+ Years Working</small>
      </article>
      </div>
      <div className="about_me_cardholder">
      <article className='about_card'> 
      <FiUsers className='about_icon' size={40} color='blue'/>
       <h5>Clients</h5>
       <small>20 worldwide</small>
      </article>
      </div>
      <div className="about_me_cardholder">
      <article className='about_card'> 
      <VscFolderLibrary className='about_icon' size={40} color='yellow'/>
       <h5>Project Completed</h5>
       <small>8+ Projects</small>
      </article>
      </div>
     </div>
      <p>
        Hy my name is lokendra Sharma and
         Recent graduate  from Victoria University Australia located in Footscray Park Campus,<br></br>
          and internship experience in web development. Highly poised and dedicated with talent <br></br>
          in design principles and programming languages. Excellent eye for visual aesthetics paired with insight 
          into data and backend functionality
      </p>
      <a href='#contact' className='btn-b'> Lets Have Chat</a>
    </section>
  )
}
