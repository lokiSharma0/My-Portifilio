import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
export const Experience = () => {
  return (
    <section id='experience'>
<h5>The Skills that Makes me Programmer</h5>
<h2>My Experience</h2>
  <div className="container experience_container">
    <div className="experience_frontend">
      <h3>Front-End Development</h3>
      <div className="experience_contect">
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>CSS</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>JavaScript</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>Boothstrap</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>React</h4>
        <small className='text-light'>Experienced</small>
        </article>
      </div>
    </div>
    <div className="experience_backend">
    <h3>Backend Development</h3>
      <div className="experience_contect">
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>Node JS</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>MongoDB</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>MySQL</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsPatchCheckFill color='green'/>
        <h4>SQL Management Studio</h4>
        <small className='text-light'>Experienced</small>
        </article>
      </div>
    </div>
  </div>
    </section>
  )
}
