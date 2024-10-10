import React from 'react';
import Paragraph from './Paragraphs.tsx';


type ServicesProps = {
  id: number,
  title: string,
  icon: string,
  text: string
}

const Service: React.FC<ServicesProps> = ({id, title, icon, text}) => {
  return (
    <div>
      <article className="service" >
        <span className="service-icon"><i className={icon.toString()}></i></span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <Paragraph text={text} className="service-text"/>
        </div>
      </article>
    </div>
  )
}

export default Service
