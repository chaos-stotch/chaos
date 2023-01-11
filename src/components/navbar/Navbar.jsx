import React from 'react'
import './navbar.css'
import LOGOIMG from '../../images/logo.png'

function header() {
  return (
    <header>
      <a href="/chaos"><img src={LOGOIMG} alt="logo" className='logo' /></a>
      <div className='rightMenus'>
        <a href="/chaos/#/services">
          <span className='menuPage servicesPage'>Services</span>
        </a>
        <a href="/chaos/#/contact">
          <span className='menuPage contactPage'>Contact</span>
        </a>
      </div>
    </header>
  )
}

export default header
