import React from 'react'
import './technologies.css'

import IMG1 from  '../../images/react.png'
import IMG2 from  '../../images/css-3.png'
import IMG3 from  '../../images/html.png'
import IMG4 from '../../images/node-js.png'

function Technologies() {
  return (
    <div className='technologies'>
        <h2 className='technologiesTitle'>
            Technologies
        </h2>

        <div className='description'>
          <p>React: A JavaScript library for building user interfaces</p>
          <br />
          <p>HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. </p>
          <br />
          <p>Node.js is designed to build scalable network applications.</p>
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