import React from 'react'
import {useEffect, useState} from 'react'

import './responsiveness.css'
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

  return (
    <div className='responsiveness'>
        <div className="mantle"></div>
        <div className={`borderBackground mobile ${scrolled>=55&&scrolled<=60 ? 'fullVisible' : ''}`}>
          <div className="rainbow mobile"></div>
          <img src={IMG2} alt="mobile screen" id='box' className="mobileScreen" />
        </div>
        <div className={`borderBackground desktop ${scrolled>=50&&scrolled<=60 ? 'fullVisible' : ''}`}>
          <div className="rainbow desktop"></div>
          <img src={IMG1} alt="desktop screen" className="desktopScreen" />
        </div>
        <div className="description">
          <h3>Receive a beautiful site in all screen sizes.</h3>
          <h3>As for responsiveness, we customize even the smallest detail. Practically one site for desktop and one for mobile.</h3>
          <br />
          <h3>Throughout the development process, we are detail-oriented and attentive.</h3>
        </div>
    </div>
  )
}

export default Responsiveness