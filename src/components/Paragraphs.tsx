import React from 'react'

type ParagraphProps = {
  text: string,
  className?: string,
}

const Paragraph: React.FC <ParagraphProps> = ({text}) => {
  return (
    <p>{text}</p>
  )
}

export default Paragraph
