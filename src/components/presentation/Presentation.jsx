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

    setScrolled(scrollLen)
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
        <h3>Welcome to Chaos Development, your one-stop solution for professional web development. We specialize in creating user-friendly and visually appealing websites that are optimized for search engines and easy to navigate. Let us help your business stand out online and reach a wider audience.</h3>
      </div>
      
      <div className={`description ${scrolled<=20 || scrolled > 40 ? 'hide' : ''} `}>
        <h3>Your website is often the first impression potential customers have of your business. At Chaos Development, we understand the importance of making that impression a positive one. That's why our team of web development experts will work with you to create a website that meets your specific needs and budget.</h3>
      </div>
      <div className={`description ${scrolled<=40 || scrolled > 60 ? 'hide' : ''} `}>
        <h3>In today's digital age, having a website is crucial for any small business to succeed. At Chaos Development, we have the expertise and experience to help your business thrive online. From simple one-page websites to more complex web applications, we've got you covered.</h3>
      </div>
      <div className={`description ${scrolled<=60 ? 'hide' : ''} `}>
        <h3>Don't let a subpar website hold your business back. At Chaos Development, we specialize in creating professional, visually appealing and effective websites that are optimized for search engines and easy to navigate. Let us help you increase your online presence and reach a wider audience. Contact us today to learn more about our services!</h3>
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
