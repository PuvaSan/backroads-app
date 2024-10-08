import aboutImg from '../images/about.jpeg'
import Title from './Titles.tsx';
import React from 'react'
import Paragraph from './Paragraphs.tsx'

const About: React.FC = () => {
  return (
    <>
      <section className="section" id="about">
        <Title title="About" subTitle="Us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={aboutImg}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <Paragraph text="Lorem ipsum dolor sit lorem ipsum dip sum ipsum lorem dolor sit lorem ipsum dim sum"/>

            <a href="#" className="btn">read more</a>
          </article>
        </div>
      </section>
    </>
  )
}
export default About
