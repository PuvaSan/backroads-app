import React from 'react';
import Paragraph from './Paragraphs.tsx'


type TourProps = {
  id: number,
  name: string,
  date: string,
  location: string,
  days: number,
  price: number,
  image: string,
  description: string
}

const Tour: React.FC<TourProps> = ({id, name, date, location, days, price, image, description}) => {
  return (
    <div>
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
    </div>
  )
}
export default Tour
