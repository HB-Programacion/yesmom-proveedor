import React from "react";
import { useState } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import { useOrders, useStores } from "../../../utils/helpers/useRequest";
import { useSelector } from "react-redux";

import ResumenListas from "./ResumenListas";
import ResumenPendientes from "./ResumenPendientes";
import ResumenEnviadas from "./ResumenEnviadas";

import "./Resumen.css";
const Resumen = () => {
  const [value, setValue] = useState("0");
  const [selection, setSelection] = useState(0);
  const { stores } = useSelector((state) => state.store);
  const { listOrders, loadingOrders, errorOrders } = useOrders(
    selection === 0 ? "P" : selection === 1 ? "L" : "E"
  );

  const handleChange = (e) => setValue(e.target.value);

/*   console.log("loading", loading);
  console.log("listOrders", listOrders);
  console.log("stores", stores);
  console.log("STATE", selection === 0 ? "L" : selection === 1 ? "P" : "E");
 */
  return (
    <AppLayout>
      <div className="resumen--box-main-proveedor animated fade-in">
        <div className="resumen--contenedor-centered">
          <div className="resumen--all-content">
            <div className="resumen--container-contenido">
              <div className="resumen--container-title">
                <h4 className="title-rosa title-resumen">Resumen de órdenes</h4>
                <div className="add--details-about-product resumen-details">
                  <p
                    onClick={() => setSelection(0)}
                    className={`${selection === 0 ? "detail-selected" : ""}`}
                  >
                    Pendientes
                  </p>
                  <p
                    onClick={() => setSelection(1)}
                    className={`${selection === 1 ? "detail-selected" : ""}`}
                  >
                    Listos para enviar
                  </p>
                  <p
                    onClick={() => setSelection(2)}
                    className={`${selection === 2 ? "detail-selected" : ""}`}
                  >
                    Enviados
                  </p>
                </div>
              </div>
              <div className="resumen--container-select">
                <select
                  className="select-ordenar"
                  value={value}
                  onChange={handleChange}
                >
                  {/* {loading ? ( */}
                    <>
                      <option value="0" disabled>
                        Filtrar por tienda
                      </option>
                      {stores?.length > 0
                        ? stores.map((item, i) => (
                            <option value={item._id}>
                              {item?.nombreTienda}
                            </option>
                          ))
                        : null}
                    </>
                  {/* ) : (
                    <option value="0" disabled>
                      Filtrar por tienda
                    </option>
                  )} */}
                  {/* <option>Precio de mayor a menor</option>
                                    <option>Precio de menor a mayor</option>
                                    <option>A-Z (alfabéticamente)</option>
                                    <option>Z-A (alfabéticamente)</option>
                                    <option>Últimos 30 días)</option>
                                    <option>Últimos 6 meses</option> */}
                </select>
              </div>
              <div className="resumen--container-cards">
                {selection === 0 && (
                  <ResumenPendientes
                    products={listOrders}
                    loading={loadingOrders}
                    beforeState="P"
                    afterState="L"
										selection={selection}
                  />
                )}
                {selection === 1 && (
                  <ResumenListas
                    products={listOrders}
                    loading={loadingOrders}
                    beforeState="P"
                    afterState="L"
										selection={selection}
                  />
                )}
                {selection === 2 && (
                  <ResumenEnviadas
                    products={listOrders}
                    loading={loadingOrders}
                    beforeState="L"
                    afterState="E"
										selection={selection}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Resumen;

/* import React from "react";
import { useState } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import { useOrders, useStores } from "../../../utils/helpers/useRequest";

import ResumenListas from "./ResumenListas";
import ResumenPendientes from "./ResumenPendientes";
import ResumenEnviadas from "./ResumenEnviadas";

import "./Resumen.css";
const Resumen = () => {
  const [value, setValue] = useState("0");
  const [selection, setSelection] = useState(1);
  const { listStores, loading, error } = useStores();
  const { listOrders, loadingOrders, errorOrders } = useOrders(selection === 0 ? 'P' : selection === 1 ? 'L' : 'E');

  const handleChange = (e) => setValue(e.target.value);

	console.log('listOrders',listOrders)
	console.log('STATE',selection === 0 ? 'L' : selection === 1 ? 'P' : 'E')
  return (
    <AppLayout>
      <div className="resumen--box-main-proveedor animated fade-in">
        <div className="resumen--contenedor-centered">
          <div className="resumen--all-content">
            <div className="resumen--container-contenido">
              <div className="resumen--container-title">
                <h4 className="title-rosa title-resumen">Resumen de órdenes</h4>
                <div className="add--details-about-product resumen-details">
                  <p
                    onClick={() => setSelection(0)}
                    className={`${selection === 0 ? "detail-selected" : ""}`}
                  >
                    Pendientes
                  </p>
                  <p
                    onClick={() => setSelection(1)}
                    className={`${selection === 1 ? "detail-selected" : ""}`}
                  >
                    Listos para enviar
                  </p>
                  <p
                    onClick={() => setSelection(2)}
                    className={`${selection === 2 ? "detail-selected" : ""}`}
                  >
                    Enviados
                  </p>
                </div>
              </div>
              <div className="resumen--container-select">
                <select
                  className="select-ordenar"
                  value={value}
                  onChange={handleChange}
                >
                  {loading ? (
                    <>
                      <option value="0" disabled>
                        Filtrar por tienda
                      </option>
                      {listStores?.length > 0
                        ? listStores.map((item, i) => (
                            <option value={item._id}>
                              {item?.nombreTienda}
                            </option>
                          ))
                        : null}
                    </>
                  ) : (
                    <option value="0" disabled>
                      Filtrar por tienda
                    </option>
                  )}
                  
																		</select>
																		</div>
																		<div className="resumen--container-cards">
																			{selection === 0 && <ResumenPendientes products={listOrders} loading={loadingOrders} />}
																			{selection === 1 && <ResumenListas products={listOrders} loading={loadingOrders} />}
																			{selection === 2 && <ResumenEnviadas products={listOrders} loading={loadingOrders} />}
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</AppLayout>
												);
											};
											
											export default Resumen;
											 */
