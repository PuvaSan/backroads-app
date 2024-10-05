import Title from './Titles.tsx'
import React from 'react'
import { servicesData } from '../data.js'

type ServicesTypes = {
  id: Number,
  title: String,
  icon: String,
  text: String
}

const Services: React.FC = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="Our" subTitle="Services" />
        <div className="section-center services-center">
          {servicesData.map ( (service: ServicesTypes) => {
            const {id, title, icon, text} = service;
            return (
              <>
                <article className="service" key={id.toString()}>
                  <span className="service-icon"><i className={icon.toString()}></i></span>
                  <div className="service-info">
                    <h4 className="service-title">{title}</h4>
                    <p className="service-text">{text}</p>
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
export default Services
