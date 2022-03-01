import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
  return (
  
      <header>
        <div className="logo"><Link to="/">Air Quality</Link></div>
      <nv>
        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/community" >Community</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/registration">Registration</Link></li>
        </ul>
      </nv>
      </header>
  
  )
}

export default Header