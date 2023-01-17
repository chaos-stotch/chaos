import React from 'react'
import './navbar.css'
import LOGOIMG from '../../images/logo.png'

function header() {
  return (
    <header>
      <a href="/chaos"><img src={LOGOIMG} alt="logo" className='logo' /></a>
      <div className='rightMenus'>
        <a href="/chaos/#/portfolio">
          <span className='menuPage servicesPage'>portfolio</span>
        </a>
        <a href="/chaos/#/pricing">
          <span className='menuPage servicesPage'>pricing</span>
        </a>
        <a href="/chaos/#/contact">
          <span className='menuPage contactPage'>contact</span>
        </a>
      </div>
    </header>
  )
}

export default header
