import Title from './Titles.tsx'
import { toursData } from '../data.js'

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="Featured" subTitle="Tours" />

        <div className="section-center featured-center">

        {toursData.map ( (tour) => {
          const {name, date, location, days, price, image, description} = tour;
          return (
            <>
              <article className="tour-card">
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{name}</h4>
                  </div>
                  <p>{description}</p>
                  <div className="tour-footer">
                    <p>
                      <span><i className="fas fa-map"></i></span>{location}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
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
