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
        <div className="content-price">
          <p className={discount ? "price-discount" : "real-price"}>S/ {parseFloat(price).toFixed(2)}</p>
          {(discount || discount !== 0) && <p className="promotional-price">s/ {parseFloat(price - discount).toFixed(2)}</p>}
        </div>
      </div>
    </div>
  )
}

export default CardProduct

