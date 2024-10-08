import React from 'react'
import Paragraph from './Paragraphs.tsx'

const Hero: React.FC = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <Paragraph text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta." />
          <a href="#tours" className="btn hero-btn">explore tours</a>
        </div>
      </section>
    </>
  )
}

export default Hero
