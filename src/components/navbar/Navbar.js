import React from 'react'
import { NavDiv } from './navbarStylesheet'
import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavDiv>
       <NavLink to='/' style={{textDecoration:"none"}}><h1>Awakened</h1></NavLink> 
        <div className="sub-links">
            <Link to="#shift-landing-page" className='links'><div>Home</div></Link>
            <Link to='#shift-service-page' className='links'><div>Services</div></Link>
            <Link to="#shift-about-page" className='links'><div>About</div></Link>
            <button><h2>Freebot</h2></button>
        </div>
    </NavDiv>
  )
}

export default Navbar