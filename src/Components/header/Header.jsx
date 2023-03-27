import React from 'react'
import './header.css'
import img from '../../assets/nobackgroundlokimg.png'
import Cvb from './Cvb'
import Socialmedia from './Socialmedia'
export const Header = () => {
  return (
    <>
    <header className='main-container' id='home'>
    <div className='container'>
      <h4>Hy, There I'am </h4>
      <h1>Lokendra Sharma</h1>
      <h3 className='text-light'> And i am Full Stack Developer</h3>
    </div>
    <div className='imgbox'>
      <img className='profile-image' src={img} alt='img1'></img>
    </div>
    </header>
    <Socialmedia/>
    <div className='cvb-div'>
      <Cvb/>
    </div>
    </>
  )
}
