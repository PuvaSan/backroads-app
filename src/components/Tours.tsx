import Title from './Titles.tsx'
import React from 'react'
import { toursData } from '../data.js'
import Tour from './Tour.tsx'

const Tours: React.FC = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="Featured" subTitle="Tours" />

        <div className="section-center featured-center">

        {toursData.map ( (tour) => {
          return (
            <>
              <Tour key={tour.id} {...tour} />
            </>
          );
        })}


        </div>
      </section>
    </>
  )
}
export default Tours
