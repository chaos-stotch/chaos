import React from 'react'
import './technologies.css'
import { useTranslation } from 'react-i18next'

import IMG1 from  '../../images/react.png'
import IMG2 from  '../../images/css-3.png'
import IMG3 from  '../../images/html.png'
import IMG4 from '../../images/node-js.png'

function Technologies() {
  const { t } = useTranslation()

  return (
    <div className='technologies'>
        <h2 className='technologiesTitle'>
          {t("Technologies")}
        </h2>

        <div className='description'>
          <p>
            {t("At Chaos Development, we stay on top of the latest technologies to ensure that your website is not only visually appealing but also fast, reliable and secure. We specialize in using ReactJS, HTML, and CSS to create dynamic and responsive websites that are optimized for search engines and easy to navigate. With our team of experts, you can be sure that your website will be built using the best tools and practices in the industry.")}
          </p>
        </div>
        <div className="techIcons">
          <img src={IMG1} alt="" className='techIcon' />
          <img src={IMG3} alt="" className='techIcon' />
          <img src={IMG2} alt="" className='techIcon' />
          <img src={IMG4} alt="" className='techIcon' />
        </div>
    </div>
  )
}

export default Technologies