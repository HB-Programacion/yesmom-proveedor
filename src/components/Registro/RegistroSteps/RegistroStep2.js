import React from "react";

import { Row, Col } from "react-bootstrap";

const RegistroStep2 = ({ register, errors }) => {
  return (
    <>
      <h4 className="registro-title"> 2. Información de la empresa</h4>
      <div className="registro-box-all-inputs">
        <div className="row">
          <div className="col-md-6 registro-box-input">
            <label htmlFor="nombreCompletoRepresentante">
              Nombre completo del representante legal*:
            </label>
            <input
              type="text"
              id="nombreCompletoRepresentante"
              name="nombreCompletoRepresentante"
              {...register("nombreCompletoRepresentante")}
            />
            <p className="error-input">
              {errors?.nombreCompletoRepresentante?.message}
            </p>
          </div>
          <div className="col-md-6 registro-box-input mq-mt-2">
            <label htmlFor="documentoRepresentante">
              Documento de identidad del representante legal*:
            </label>
            <input
              maxLength="8"
              type="text"
              id="documentoRepresentante"
              name="documentoRepresentante"
              {...register("documentoRepresentante")}
            />
            <p className="error-input">
              {errors?.documentoRepresentante?.message}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 registro-box-input mt-0">
            <label htmlFor="razonSocial">Razón social*:</label>
            <input
              type="text"
              id="razonSocial"
              name="razonSocial"
              {...register("razonSocial")}
            />
            <p className="error-input">{errors?.razonSocial?.message}</p>
          </div>
          <div className="col-md-6 registro-box-input mt-0">
            <label htmlFor="ruc">RUC*:</label>
            <input maxLength="11" type="text" id="ruc" name="ruc" {...register("ruc")} />
            <p className="error-input">{errors?.ruc?.message}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 registro-box-input mt-0">
            <label htmlFor="telefonoEmpresa">Teléfono de la empresa*:</label>
            <input
              type="tel"
              id="telefonoEmpresa"
              name="telefonoEmpresa"
              {...register("telefonoEmpresa")}
            />
            <p className="error-input">{errors?.telefonoEmpresa?.message}</p>
          </div>
          <div className="col-md-6 registro-box-input mt-0">
            <label htmlFor="pais">Pais*:</label>
            <input type="text" id="pais" name="pais" {...register("pais")} />
            <p className="error-input">{errors?.pais?.message}</p>
          </div>
        </div>

        <Row>
          <Col md={6}>
            <div className="registro-box-input mt-0">
              <label htmlFor="ciudad">Ciudad*:</label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                {...register("ciudad")}
              />
              <p className="error-input">{errors?.ciudad?.message}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="registro-box-input mt-0">
              <label htmlFor="distrito">Distrito*:</label>
              <input
                type="text"
                id="distrito"
                name="distrito"
                {...register("distrito")}
              />
              <p className="error-input">{errors?.distrito?.message}</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div className="registro-box-input mt-0 mq-mb-0">
              <label htmlFor="direccion">Dirección*:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                {...register("direccion")}
              />
              <p className="error-input">{errors?.direccion?.message}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="registro-box-input mt-0 mb-0 mq-mb-0">
              <label htmlFor="paginaWeb">Página web*:</label>
              <input
                type="text"
                id="paginaWeb"
                name="paginaWeb"
                {...register("paginaWeb")}
              />
              <p className="error-input">{errors?.paginaWeb?.message}</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegistroStep2;
