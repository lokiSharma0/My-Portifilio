import React from 'react'
import { AiFillHome } from "react-icons/ai";
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {AiFillCrown} from 'react-icons/ai'
import './nav.css'
import { useState } from 'react';
export const Nav = () => {
  const[activeNav,setactiveNav]=useState('#')
  return (
    <nav>
      <a href='#home' className={activeNav==='#'? 'active':''} onClick={()=>setactiveNav('#')}><AiFillHome/></a>
      <a href='#about' onClick={()=>setactiveNav('#about')} className={activeNav==='#about'? 'active':''} ><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setactiveNav('#experience')} className={activeNav==='#experience'? 'active':''}><AiFillBook/></a>
      <a href='#portifilio'  onClick={()=>setactiveNav('#portifilio')} className={activeNav==='#portifilio'? 'active':''}><AiFillCrown/></a>
      <a href='#contact'  onClick={()=>setactiveNav('#contact')} className={activeNav==='#contact'? 'active':''}><AiFillContacts/></a>
    </nav>
  )
}
