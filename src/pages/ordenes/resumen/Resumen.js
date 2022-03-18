import React, { useEffect } from "react";
import { useState } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import { useDispatch, useSelector } from "react-redux";

import ResumenListas from "./ResumenListas";
import ResumenPendientes from "./ResumenPendientes";
import ResumenEnviadas from "./ResumenEnviadas";

import "./Resumen.css";
import { loadOrdersByStore, setActiveStore } from "../../../redux/actions/store";
import PaginationOrders from "../../../components/Pagination/Orders/PaginatinationOrders";
import Loading from "../../../components/Loading/Loading";
const Resumen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui);
  const { idActiveStore, ordersByStore , stores } = useSelector(state => state.store);
  const [value, setValue] = useState("0");
  const [selection, setSelection] = useState(0);


  const handleChange = (e) => {
    setValue(e.target.value)
  };

  useEffect(()=>{
    if(stores){
      setValue('0');
    }
  },[stores,dispatch])

  useEffect(()=>{
    if(value){
        const state = selection === 0 ? "P" : selection === 1 ? "L" : "E";
        dispatch(loadOrdersByStore({id : value, state, limit :4}))
    }
  },[value,selection,dispatch])

  return (
    <AppLayout>
      {
        loading && <Loading  />
      }
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
                {
                  stores && 
                <select
                  className="select-ordenar"
                  value={value}
                  onChange={handleChange}
                >

                  <option value="0">
                    Todos
                  </option>
                  {stores.length > 0
                    ? stores.map((item, i) => (
                        <option key={`option-store-${i}`} value={item._id}>
                          {item?.nombreTienda}
                        </option>
                      ))
                    : null}

                </select>
                }
              </div>
              <div className="resumen--container-cards">
                {
                  selection === 0 && 
                  <ResumenPendientes
                    products={ordersByStore ? ordersByStore.ordersGeneral : []}
                    loading={false}
                    beforeState="P"
                    afterState="L"
										selection={selection}
                  />
                }
                {selection === 1 && (
                  <ResumenListas
                    products={ordersByStore ? ordersByStore.ordersGeneral : []}
                    loading={false}
                    beforeState="L"
                    afterState="E"
										selection={selection}
                  />
                )}
                {selection === 2 && (
                  <ResumenEnviadas
                    products={ordersByStore ? ordersByStore.ordersGeneral : []}
                    loading={false}
										selection={selection}
                  />
                )}
              </div>
              <div className="pagination-orders-container">
                <PaginationOrders selection={selection} value={value}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Resumen;

