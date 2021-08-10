import React from 'react'
import { Link } from 'react-router-dom';

import back from '../../images/perfil/back.svg';

import './Return.css';

const Return = ({ returnto }) => {
  return (
    <div className="container-return">
      <Link to={returnto}>
        <div className="show return">
          <img src={back} alt="volver" />
          <p className="info-perfil-back">Volver</p>
        </div>
      </Link>
    </div>
  )
}

export default Return
