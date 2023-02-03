import './presentation.css'
import {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'

const data = [
  {id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20},{id:21},{id:22},{id:23},{id:24},{id:25},{id:26},{id:27},{id:28},{id:29},{id:30},{id:31},{id:32},{id:33},{id:34},{id:35},{id:36},{id:37},{id:38},{id:39},{id:40},{id:41},{id:42},{id:43},{id:44},{id:45},{id:46},{id:47},{id:48},{id:49},{id:50},{id:51},{id:52},{id:53},{id:54},{id:55},{id:56},{id:57},{id:58},{id:59},{id:60},{id:61},{id:62},{id:63},{id:64},{id:65},{id:66},{id:67},{id:68},{id:69},{id:70},{id:71},{id:72},{id:73},{id:74},{id:75},{id:76},{id:77},{id:78},{id:79},{id:80},{id:81},{id:82},{id:83},{id:84},{id:85},{id:86},{id:87},{id:88},{id:89},{id:90},{id:91},{id:92},{id:93},{id:94},{id:95},{id:96},{id:97},{id:98},{id:99},{id:100}]

function Presentation() {
  const [scrolled, setScrolled] = useState(3)

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

  const { t } = useTranslation()

  return (
    <div className={`presentation ${scrolled>80 ? 'presentationHide': 'presentationVisible'}`}>
      <div className="headerPresentation">
        <div className="mantle" />
        <img src={`${process.env.PUBLIC_URL}/images/animations/ray/ray${scrolled.toString().padStart(5, '0')}.png`}
          className={`gifFrames`}
          alt='' />
      </div>
      <h1 className={`siteTitle ${scrolled>3 ? 'moved' : ''}`}>Chaos Development</h1>
      <div className={`description ${scrolled>20 ? 'hide' : ''}`}>
        <h3>
          {t('Welcome to Chaos Development, your one-stop solution for professional web development. We specialize in creating user-friendly and visually appealing websites that are optimized for search engines and easy to navigate. Let us help your business stand out online and reach a wider audience.')}
        </h3>
      </div>
      
      <div className={`description ${scrolled<=20 || scrolled > 40 ? 'hide' : ''} `}>
        <h3>
          {t("Your website is often the first impression potential customers have of your business. At Chaos Development, we understand the importance of making that impression a positive one. That's why our team of web development experts will work with you to create a website that meets your specific needs and budget.")}
        </h3>
      </div>
      <div className={`description ${scrolled<=40 || scrolled > 60 ? 'hide' : ''} `}>
        <h3>
          {t("In today's digital age, having a website is crucial for any small business to succeed. At Chaos Development, we have the expertise and experience to help your business thrive online. From simple one-page websites to more complex web applications, we've got you covered.")}
          </h3>
      </div>
      <div className={`description ${scrolled<=60 ? 'hide' : ''} `}>
        <h3>
          {t("Don't let a subpar website hold your business back. At Chaos Development, we specialize in creating professional, visually appealing and effective websites that are optimized for search engines and easy to navigate. Let us help you increase your online presence and reach a wider audience. Contact us today to learn more about our services!")}
        </h3>
      </div>
      <a href="/chaos/#/contact">
        <button className='callToAction'>
          {t("let's start!")}
        </button>
      </a>
      {
        data.map(({id}) => {
          return (
            <img src={`${process.env.PUBLIC_URL}/images/animations/ray/ray${id.toString().padStart(5, '0')}.png`} className={`loadImg`} alt='' />
            )
        })
      }
      
    </div>
  )
}

export default Presentation
