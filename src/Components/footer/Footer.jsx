import React from 'react'
import { AiOutlineLinkedin} from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
import './footer.css'
export const Footer = () => {
  return (
   <footer>
    <a href='#home' className='footerlogo'>Lokendra Sharma</a>
    <ul className='premalinks'>
      <li><a href='#home'>Home</a> </li>
      <li><a href='#about'>About</a> </li>
      <li><a href='#experience'>Experience</a> </li>
      <li><a href='#portifilio'>Projects</a> </li>
      <li><a href='#contact'>Contact me</a> </li>
    </ul>
    <div className="social_media_icons">
      <a href='https://www.linkedin.com/'><AiOutlineLinkedin size='30' color='blue'/></a>
      <a href='https://www.facebook.com/'><AiFillFacebook size='30' color='yellow'/></a>
      <a href='https://github.com'><AiFillGithub size='30' color='green'/></a>
    </div>
    <div className="footer_copyright"></div>
    <small>@@@Lokendra_Sharma@@@@@..All rights Reserved</small>

   </footer>
  )
}
