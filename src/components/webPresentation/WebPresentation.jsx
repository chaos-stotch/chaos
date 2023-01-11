import React from 'react'
import './webPresentation.css'
import {useEffect, useState} from 'react'

function WebPresentation() {
	const [scrolled, setScrolled] = useState(1)

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress)

    return () => window.removeEventListener("scroll", scrollProgress)
  }, [])

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollLen = Math.ceil(scrollpx / winHeightPx*100/1) + 1

    if(scrollLen <100) {
      setScrolled(scrollLen)
    }
  }
	return (
		<div className={`webPresentation ${scrolled>=50 ? 'presentationHide': 'presentationVisible'}`}>
			<div className="headerPresentation">
        <div className="mantleWeb" />
        <img src={`${process.env.PUBLIC_URL}/images/animations/coding/coding${scrolled.toString().padStart(5, '0')}.png`}
          className={`gifFrames`}
          alt='coding' />
				<h1 className="serviceTitle">Web-Development</h1>
      </div>
			<div className={`description ${scrolled > 16 ? 'hide' : ''} `}>
				<h3>Web pages (Frontend)</h3>
        <br />
        <h4>We develop modern and responsive pages.</h4>
        <h4>Bring your Figma design or similar, and we'll turn it into code.</h4>
        <br />
        <h4>We also create your design from your references.</h4>
			</div>

			<div className={`description ${scrolled<=16 || scrolled > 33 ? 'hide' : ''} `}>
        <h3>The internal functioning of the website (Backend)</h3>
        <br />
        <br />
        <h4>We develop and apply all the internal functions of your website: </h4>
        <ul>
          <li>Registrations</li>
          <li>External requests</li>
        </ul>
        <br />
        <h4>Or any functionality needed to make your site live.</h4>
      </div>
			<div className={`description ${scrolled <= 33 || scrolled > 50 ? 'hide' : ''} `}>
				<h3>General development and others (DevOps)</h3>
        <ul>
          <li>Database Implementation.</li>
          <li>Scalability.</li>
          <li>Security techniques against attacks.</li>
        </ul>
			</div>
		</div>
	)
}

export default WebPresentation