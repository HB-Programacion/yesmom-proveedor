import React, { useState } from 'react'
import nextPage from '../../images/producto/icon-next-page.svg'

import './Pagination.css'

const Pagination = ( { maxSteps }) => {
  
  const arrayButtons = new Array( maxSteps );

  console.log(arrayButtons.length)

  const [currentPage, setCurrentPage] = useState(1)
  const handlePrev = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="container-pagination">
      <div className="content-pagination">
        {currentPage > 1 && <button onClick={handlePrev}>prev</button>}
        {
          arrayButtons.map((item , idx) => {
            console.log('Hola')
          } )
        }
        <button className="button-page number-page" onClick={handleNext}><img src={nextPage} alt="icono siguente página" /></button>
      </div>
    </div>
  )
}

export default Pagination
