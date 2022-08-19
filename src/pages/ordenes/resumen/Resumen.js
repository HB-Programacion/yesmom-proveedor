import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import { useDispatch, useSelector } from "react-redux";

import ResumenListas from "./ResumenListas";
import ResumenPendientes from "./ResumenPendientes";
import ResumenEnviadas from "./ResumenEnviadas";

import "./Resumen.css";
import { loadOrdersByStore, searchClient } from "../../../redux/actions/store";
import PaginationOrders from "../../../components/Pagination/Orders/PaginatinationOrders";
import Loading from "../../../components/Loading/Loading";

import { useDebounce } from "../../../utils/dom/useDebounce";
import InlineLoader from "../../../components/Loading/InlineLoader";
import { usePrevious } from "../../../utils/dom/usePrevious";

const Resumen = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const debouncedInputText = useDebounce(inputText, 500);
  const { loading } = useSelector((state) => state.ui);
  const { ordersByStore, stores, clients, fetchingClients } = useSelector(
    (state) => state.store
  );
  const prevClients = usePrevious(clients);

  const [selectedClient, setSelectedClient] = useState('');
  const [value, setValue] = useState("0");
  const [selection, setSelection] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeClient = (e) => {
    setSelectedClient(e.target.value);
  };

  const handleSelection = (id) => {
    setSelection(id);
  };

  useEffect(()=>{
    if(prevClients && !prevClients.length && clients && clients.length ){
      setSelectedClient(clients[0]._id);
    }
  },[prevClients,clients])

  const queryParamsCallback = useCallback(() => {
    let paramsTemp = {};
    if(selectedClient){
      paramsTemp.clienteId = selectedClient
    }
    if(value!=='0')  paramsTemp.storeId = value;
    paramsTemp.state = selection === 0 ? "P" : selection === 1 ? "L" : "E";
    paramsTemp.limit= 4;
    return paramsTemp;
  }, [selectedClient,selection,value]);

  useEffect(() => {
    if (typeof debouncedInputText === "string") {
      dispatch(searchClient(debouncedInputText));
    }
  }, [dispatch, debouncedInputText]);

  useEffect(() => {
    const params = queryParamsCallback();
    if (params) {
      console.log(params);
      dispatch(loadOrdersByStore(params));
    }
  }, [dispatch,queryParamsCallback]);


  return (
    <AppLayout>
      {loading && <Loading />}
      <div className="resumen--box-main-proveedor animated fade-in">
        <div className="resumen--contenedor-centered">
          <div className="resumen--all-content">
            <div className="resumen--container-contenido">
              <div className="resumen--container-title">
                <h4 className="title-rosa title-resumen">Resumen de órdenes</h4>
                <div className="add--details-about-product resumen-details">
                  <p
                    onClick={() => handleSelection(0)}
                    className={`${selection === 0 ? "detail-selected" : ""}`}
                  >
                    Pendientes
                  </p>
                  <p
                    onClick={() => handleSelection(1)}
                    className={`${selection === 1 ? "detail-selected" : ""}`}
                  >
                    Listos para enviar
                  </p>
                  <p
                    onClick={() => handleSelection(2)}
                    className={`${selection === 2 ? "detail-selected" : ""}`}
                  >
                    Enviados
                  </p>
                </div>
              </div>
              <div className="resumen--container-select">
                <div className="resumen--wrap-filters">
                  <input
                    placeholder="Nombre o DNI a buscar"
                    className="resumen--input-text"
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </div>
                <div className="resumen--filters">
                  {fetchingClients && clients && !clients.length ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <InlineLoader />
                    </div>
                  ) : clients && clients.length ? (
                    <div className="resumen--container-select">
                      <select
                        className="select-ordenar"
                        value={selectedClient}
                        onChange={handleChangeClient}
                      >
                        {clients.map((c, idx) => (
                          <option key={c._id} value={c._id}>
                            {c.fastSearch}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}

                  <div className="resumen--container-select">
                    {stores && stores.length > 0 ? (
                      <select
                        className="select-ordenar"
                        value={value}
                        onChange={handleChange}
                      >
                        <option value="0">Todos</option>
                        {stores.map((item, i) => (
                              <option
                                key={`option-store-${i}`}
                                value={item._id}
                              > 
                                {item?.nombreTienda}
                              </option>
                            ))
                          }
                      </select>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="resumen--container-cards">
                {selection === 0 && (
                  <ResumenPendientes
                    products={ordersByStore ? ordersByStore.ordersGeneral : []}
                    loading={false}
                    beforeState="P"
                    afterState="L"
                    selection={selection}
                  />
                )}
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
                <PaginationOrders selection={selection} value={value}  selectedClient={selectedClient}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Resumen;
