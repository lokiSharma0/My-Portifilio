import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import  { useRef } from 'react';
import emailjs from 'emailjs-com' ;

export const Contact = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bumgaon', 'template_0360qhc', form.current, '1_79Lo6ONRgZ2u5cT')
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get in touch With Me</h5>
      <h2>Contact Me</h2>
       <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
              <MdEmail color='red' size='20'/>
              <h4>Email</h4>
              <h5>lorenzsharma@gmail.com</h5>
              <a href='mailto:lorenzsharma@gmail.com' className='message'>Send Message </a> 
            </article>
            <article className="contact_option">
              <FaFacebookMessenger color='yellow' size='20'/>
              <h4>Messanger</h4>
              <h5>Lokendra_Sharma</h5>
              <a href='https://m.me/messages/t/100014894686562/' className='message'>Send Message </a> 
            </article>
            <article className="contact_option">
              <FiPhoneCall color='blue' size='20'/>
              <h4>Phone Number</h4>
              <h5>0426763400</h5>
              <a href='tel:0426763400'>Call Now</a> 
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder='Provide Your Name' required/>
          <input type="email" name="email" placeholder='Provide Your Emila' required/>
          <textarea name="message" rows="5" placeholder='Your Message to me ' required/>
          <button  type='submit' className='btn'>Send Message</button>
        </form>
       </div>
    </section>
  )
}
