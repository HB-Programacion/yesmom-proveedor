import React from 'react'

import './CardProduct.css'

const CardProduct = ({ image, title, description, price, discount }) => {
  return (
    <div className="card-product-container">
      <div className="card-product-content-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-product-content-text">
        <p>{title}</p>
        <p>{description}</p>
        {discount &&
          <div className="content-price">
            <p className="real-price">{price}</p>
            <p className="promotional-price">{price - discount}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default CardProduct

