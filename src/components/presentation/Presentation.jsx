import './presentation.css'
import {useEffect, useState} from 'react'

function Presentation() {
  const [scrolled, setScrolled] = useState(1)

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress)

    return () => window.removeEventListener("scroll", scrollProgress)
  }, [])

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollLen = Math.ceil(scrollpx / winHeightPx*100/.8) + 3

    if(scrollLen <90) {
      setScrolled(scrollLen)
    }
  }

  return (
    <div className={`presentation ${scrolled>80 ? 'presentationHide': 'presentationVisible'}`}>
      <div className="headerPresentation">
        <div className="mantle" />
        <img src={`${process.env.PUBLIC_URL}/images/animations/ray/ray${scrolled.toString().padStart(5, '0')}.png`}
          className={`gifFrames`}
          alt='splash-apaint' />
      </div>
      <h1 className={`siteTitle ${scrolled>1 ? 'moved' : ''}`}>Chaos Development</h1>
      <div className={`description ${scrolled>20 ? 'hide' : ''}`}>
        <h3>Chaos Development is a company dedicated to Web development, front-end, and back-end.</h3>
        <br />
        <h3>We will develop the most complex functionalities required. Modern and bold websites.</h3>
        <br />
        <h5>Click the button. Let's get started!</h5>
      </div>
      
      <div className={`description ${scrolled<=20 || scrolled > 40 ? 'hide' : ''} `}>
        <h3>In addition to the website, we deliver the following:</h3>
        <ul>
          <br />
          <li>More visitors.</li>
          <li>Great ranking on google.</li>
          <li>Quality in user experience.</li>
          <li>Standout from the competition.</li>
          <li>Less work to present your products and services to customers.</li>
        </ul>
      </div>
      <div className={`description ${scrolled<=40 || scrolled > 60 ? 'hide' : ''} `}>
        <h3>Modern UI, Efficient Backend.</h3>
        <br />
        <h3>With the most modern technology, we develop websites at a business level.</h3>
      </div>
      <div className={`description ${scrolled<=60 ? 'hide' : ''} `}>
        <h3>Start right now!</h3>
      </div>
      <a href="/chaos/#/contact">
        <button className='callToAction'>
          let's start!
        </button>
      </a>
      
    </div>
  )
}

export default Presentation
