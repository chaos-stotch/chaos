import React from 'react'
import './navbar.css'
import LOGOIMG from '../../images/logo.png'

function header() {
  return (
    <header>
      <a href="/"><img src={LOGOIMG} alt="logo" className='logo' /></a>
      <div className='rightMenus'>
        <a href="/services">
          <span className='menuPage servicesPage'>Services</span>
        </a>
        <a href="/contact">
          <span className='menuPage contactPage'>Contact</span>
        </a>
      </div>
    </header>
  )
}

export default header
