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

  const styleObj = {
    backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${(scrolled-3)*1.3}%, rgba(0, 0, 0, 1) 0)`
}

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
          {t('Welcome to Chaos Development, where we transform chaos into functional and stunning websites.')}
        </h3>
      </div>
      
      <div className={`description ${scrolled<=20 || scrolled > 40 ? 'hide' : ''} `}>
        <h3>
          {t("At Chaos Development, we believe that a website is not just a digital space; it's a platform that can enhance your business's reach and success.")}
        </h3>
      </div>
      <div className={`description ${scrolled<=40 || scrolled > 60 ? 'hide' : ''} `}>
        <h3>
          {t("From simple to complex pages, we offer a comprehensive range of website development services to boost your online presence and increase customer engagement.")}
          </h3>
      </div>
      <div className={`description ${scrolled<=60 ? 'hide' : ''} `}>
        <h3>
          {t("Contact us today to elevate your business's digital presence with a custom website from Chaos Development.")}
        </h3>
      </div>
      <a href="/chaos/#/contact">
        <button className='callToAction'
          style= {styleObj}>
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
