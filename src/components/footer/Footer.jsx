import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='pageFooter'>
      <div className="footerBorder"></div>
        <a href="https://github.com/chaos-stotch" rel="noreferrer" target={'_blank'} className='devGithub'>
            developer github
        </a>
        <div className="footerCenter">
            <span>Chaos Development</span>
            <br />
            <span>Copyright © 2023 Chaos Development. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer