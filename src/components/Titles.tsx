import React from 'react'

type TitleProps = {
  title: string,
  subTitle: string,
}

const Title: React.FC<TitleProps> = ({title, subTitle}) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
}
export default Title
