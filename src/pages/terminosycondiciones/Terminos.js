import React from "react";
import { Container } from "react-bootstrap";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./Terminos.css"

const Terminos = () => {
  return (
    <AppLayout>
      <Container>
        <div className="container-politicas">
          <h3>TÉRMINOS Y CONDICIONES</h3>
          <p>
            YES MOM PERU S.A.C. (en adelante, “YES MOM”) te da la bienvenida a
            nuestra plataforma que opera en{" "}
            <a href="https://www.yesmom.com.pe/">https://www.yesmom.com.pe</a> y
            cualquiera de sus enlaces (en adelante, la “Plataforma”), donde
            podrás encontrar una variedad de productos y/o servicios para bebés
            y niños, así como recibir asesoría especializada sobre artículos y
            cuidado de bebés y niños.
          </p>
        </div>
      </Container>
    </AppLayout>
  );
};

export default Terminos;
