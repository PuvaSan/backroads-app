import Title from './Titles.tsx'
import React from 'react'
import { servicesData } from '../data.js'
import Service from './Service.tsx'

const Services: React.FC = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="Our" subTitle="Services" />
        <div className="section-center services-center">
          {servicesData.map ( (service) => {
            return (
              <>
                <Service key={service.id} {...service}/>
              </>
            );
          })}
        </div>
      </section>
    </>
  )
}
export default Services
