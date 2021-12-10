import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../components/AppLayout/AppLayout";
import osito from "../../images/error/osito_triste.png"
import letter from "../../images/error/letter_error.png"

import "./Notfound.css"

const index = () => {
  return (
    <AppLayout>
      <div className="box-error fade-in animated">
        <div className="section-error">
          <div className="img-osito tilt-in-fwd-tr">
            <img
              src={osito}
              alt="Osito triste, no encuentra la página"
             
            />
          </div>
          <div className="box-text-error">
            <img
              src={letter}
              alt="Error 404"
              className="img-foto"
            />
            <p>Página no encontrada</p>
            <div className="btn-error">
              <Link to="/">
                <a>PÁGINA DE INICIO</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default index;
