import Title from './Titles.tsx'
import React from 'react'
import Paragraph from './Paragraphs.tsx'
import { toursData } from '../data.js'

type TourTypes = {
  id: number,
  name: string,
  date: string,
  location: string,
  days: number,
  price: number,
  image: string,
  description: string
}

const Tours: React.FC = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="Featured" subTitle="Tours" />

        <div className="section-center featured-center">

        {toursData.map ( (tour: TourTypes) => {
          const {id, name, date, location, days, price, image, description} = tour;
          return (
            <>
              <article className="tour-card" key={id.toString()}>
                <div className="tour-img-container">
                  <img src={image.toString()} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{name}</h4>
                  </div>
                  <Paragraph text={description}/>
                  <div className="tour-footer">
                    <p>
                      <span><i className="fas fa-map"></i></span>{location}
                    </p>
                    <p>{days.toString()} days</p>
                    <p>$ {price.toString()}</p>
                  </div>
                </div>
              </article>
            </>
          );
        })}


        </div>
      </section>
    </>
  )
}
export default Tours
