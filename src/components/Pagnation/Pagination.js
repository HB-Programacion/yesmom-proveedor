import React, { useState } from 'react'
import nextPage from '../../images/producto/icon-next-page.svg'

import './Pagination.css'

const Pagination = ( { maxSteps }) => {
  console.log(maxSteps);
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
        <button className={currentPage === 1 ? "button-page current-page" : "button-page number-page"}>1</button>
        <button className={currentPage === 2 ? "button-page current-page" : "button-page number-page"}>2</button>
        <button className={currentPage === 3 ? "button-page current-page" : "button-page number-page"}>3</button>
        <button className={currentPage === 4 ? "button-page current-page" : "button-page number-page"}>4</button>
        <button className="button-page number-page" onClick={handleNext}><img src={nextPage} alt="icono siguente página" /></button>
      </div>
    </div>
  )
}

export default Pagination
