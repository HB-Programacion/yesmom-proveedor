import React from 'react'

import './CardShadow.css'

const CardShadow = ({ title, paragraph, content }) => {
  return (
    <div className="card-shadow">
      <h6>{title}</h6>
      <p className="card-shadow-paragraph">{paragraph}</p>
      {content}
    </div>
  )
}

export default CardShadow
