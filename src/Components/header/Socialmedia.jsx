import React from 'react'
import { AiOutlineLinkedin} from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
import './header.css'
 const Socialmedia = () => {
  return (
    <div className='socialicons-all'>
        <a className='socialicons' href='https://www.linkedin.com/'><AiOutlineLinkedin size={25}/></a>
        <a className='socialicons' href='https://www.facebook.com/'><AiFillFacebook size={25}/></a>
        <a className='socialicons' href='https://github.com/'><AiFillGithub size={25}/></a>
    </div>
  )
}
export default Socialmedia