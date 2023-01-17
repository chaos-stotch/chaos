import React from 'react'
import './portfolio.css'
import { BsGithub } from 'react-icons/bs'
import IMG1 from '../../images/portfolio-mangareader.jpg'
import IMG2 from '../../images/portfolio-hercules.png'
import IMG3 from '../../images/portfolio-netflix.png'
import IMG4 from '../../images/portfolio-pokedex.png'
import IMG5 from '../../images/portfolio-portfolio.png'
import IMG6 from '../../images/portfolio-qr.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Manga Reader',
    github: 'https://github.com/chaos-stotch/manga-reader-front',
    demo: "https://manga-reader-front.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hercules Bot Website',
    github: 'none',
    demo: "none"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Netflix Clone',
    github: 'https://github.com/chaos-stotch/netflix-clone',
    demo: "none"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pokédex',
    github: 'https://github.com/chaos-stotch/pokedex',
    demo: "https://chaos-stotch.github.io/pokedex/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'Personal Portfolio',
    github: 'https://github.com/chaos-stotch/myPortfolio',
    demo: "https://my-portfolio-chaos.herokuapp.com/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'QR Code Component',
    github: 'https://github.com/chaos-stotch/QR-code-component',
    demo: "https://chaos-stotch.github.io/QR-code-component/"
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>

      <div className="portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn btn-primary' rel="noreferrer" target={'_blank'}><BsGithub/></a>
                    <a href={demo} className='btn' rel="noreferrer" target={'_blank'}>Live Demo</a>
                </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio