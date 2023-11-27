/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const NavBar = ({show}) => {
  return (
   <div className={show ? 'sidenav active' : 'sidenav'}>
    <img src={logo} alt='logo' className='logo'>

    </img>
    <ul>
        <li>
          <Link to='/'>HOME</Link>  
        </li>

        <li>
          <Link to='/create-post'>Create Image</Link>  
        </li>
        
        <li>
          <Link to='/gallery'>GALLERY</Link>  
        </li>
    </ul>
   </div>
  )
}

export default NavBar