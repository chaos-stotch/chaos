import React from 'react'
import {useEffect, useState} from 'react'
import './responsiveness.css'
import { useTranslation } from 'react-i18next'

import IMG1 from '../../images/desktop-screen.png'
import IMG2 from '../../images/mobile-screen.png'

function Responsiveness() {
  const [scrolled, setScrolled] = useState(1)

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress)

    return () => window.removeEventListener("scroll", scrollProgress)
  }, [])

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollLen = Math.ceil(scrollpx / winHeightPx*100/1.5) + 1

    setScrolled(scrollLen)
  }

  const { t } = useTranslation()

  return (
    <div className='responsiveness'>
        <div className={`borderBackground mobile ${scrolled>=55&&scrolled<=60 ? 'fullVisible' : ''}`}>
          <div className="rainbow mobile"></div>
          <img src={IMG2} alt="mobile screen" id='box' className="mobileScreen" />
        </div>
        <div className={`borderBackground desktop ${scrolled>=50&&scrolled<=60 ? 'fullVisible' : ''}`}>
          <div className="rainbow desktop"></div>
          <img src={IMG1} alt="desktop screen" className="desktopScreen" />
        </div>
        <div className="description">
          <h3>
            {t("We at Chaos Development understand the importance of a website that looks and functions flawlessly on every device. To ensure this, our expert team uses responsive design techniques to optimize your site for all screen sizes, from mobiles to desktops.")}
          </h3>
        </div>
    </div>
  )
}

export default Responsiveness