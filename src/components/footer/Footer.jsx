import React from 'react'
import './footer.css'
import { useTranslation } from 'react-i18next'
import IMG1 from '../../images/btc-logo.png'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='pageFooter'>
      <div className="footerBorder"></div>
        <a href="https://github.com/chaos-stotch" rel="noreferrer" target={'_blank'} className='devGithub'>
            developer github
        </a>
        <div className="footerCenter">
            <span>Chaos Development</span>
            <br />
            <span>
              {t("Copyright © 2023 Chaos Development. All rights reserved.")}
            </span>
            <br />
            <img src={IMG1} alt="" className='btcLogo' />
        </div>
    </footer>
  )
}

export default Footer