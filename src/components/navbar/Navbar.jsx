import React from 'react'
import './navbar.css'
import LOGOIMG from '../../images/logo.png'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t } = useTranslation()

  return (
    <header>
      <a href="/chaos"><img src={LOGOIMG} alt="logo" className='logo' /></a>
      <div className='rightMenus'>
        <a href="/chaos/#/portfolio">
          <span className='menuPage servicesPage'>
            {t("portfolio")}
          </span>
        </a>
        <a href="/chaos/#/pricing">
          <span className='menuPage servicesPage'>
            {t("pricing")}
          </span>
        </a>
        <a href="/chaos/#/contact">
          <span className='menuPage contactPage'>
            {t("contact")}
          </span>
        </a>
      </div>
    </header>
  )
}

export default Navbar
