import React from 'react'
import './seoPresentation.css'
import {useEffect, useState} from 'react'

function SeoPresentation() {
	const [scrolled, setScrolled] = useState(1)

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress)

    return () => window.removeEventListener("scroll", scrollProgress)
  }, [])

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollLen = Math.ceil(scrollpx / winHeightPx*100/1) + 1

    setScrolled(scrollLen)
  }
	return (
		<div className={`seoPresentation ${scrolled<51 ? 'presentationHide': 'presentationVisible'}`}>
			<div className=".headerPresentationSeo">
        <div className="seoImages">
          <img src={`${process.env.PUBLIC_URL}/images/animations/seo/seo${(scrolled-48).toString().padStart(3, '0')}.png`}
            className={`gifFramesSeo`}
            alt='seo' />
        </div>
      </div>
      <h1 className="serviceTitle">SEO</h1>
      <div className={`description ${scrolled > 66 ? 'hide' : ''} `}>
				<h3>Your website on the first page!</h3>
			</div>

			<div className={`description ${scrolled<=66 || scrolled > 81 ? 'hide' : ''} `}>
        <h3>Positive ratings on google maps, bringing visitors direct from google services.</h3>
      </div>

			<div className={`description ${scrolled <= 81 ? 'hide' : ''} `}>
				<h3>Traffic monitoring and analysis of your visitors.</h3>
			</div>
		</div>
	)
}

export default SeoPresentation