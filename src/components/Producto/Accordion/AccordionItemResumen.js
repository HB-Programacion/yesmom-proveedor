import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import Expand from "./Expand";
import SwitchStandard from "./SwitchStandard";
import { getDateParsed } from "../../../utils/helpers/getDateParsed";

import iconEditar from "../../../images/header/icon-edit.svg";
import "./AccordionItem.css";
import { updateStateOrders } from "../../../utils/helpers/request";

const AccordionItem = ({
	_id,
  ek,
  nombre,
  sku,
  total,
  contactoCliente,
  saleId,
  fechaPedido,
  tipoDocumento,
  metodoPago,
  cant,
  acciones,
  cliente,
  direccionCliente,
  products,
	estado,

  beforeState,
  afterState,
  valueSwitch,
	selection,
  /* onChangeSwitch, */
}) => {

	const [stateSwitch, setStateSwitch] = useState(true);

	/* const [loadingOrders, setLoadingOrders] = useState(false); */
	/* const [errorOrders, setErrorOrders] = useState(false); */
	const [messageUpdate, setMessageUpdate] = useState(null);
	/* const { messageUpdate, loadingOrders, errorOrders } = useUpdateOrders( _id, afterState ); */
	/* const { listOrders, loadingOrders, errorOrders } = useOrders(
    selection === 0 ? "P" : selection === 1 ? "L" : "E"
  ); */

	/* const UpdateState = () => {

			setStateSwitch(!stateSwitch)
			useUpdateOrders( _id,  beforeState );
			
		} */

	const UpdateOrders = async (_id, beforeState) => {
			
		/* setLoadingOrders(true); */
    /* setErrorOrders(false); */

    try {
      /* const res = await axios.patch(
				`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/orderstate`,
				{ 
					id: _id, 
					estado: afterState 
				},
				{
					headers: {
						"access-token": token,
					} ,
				}
			); */
			let res = await updateStateOrders(_id, beforeState);
			if(res?.response) {
				setStateSwitch(!stateSwitch)
				/* setLoadingOrders(false); */
				setMessageUpdate(res?.response?.ok);
				
			} else {
				setMessageUpdate(res?.MensajeRespuesta);
			}
    } catch (error) {
      /* setErrorOrders(true); */
    }
	};

	/* const getPeriodos = async () => {
    try {
      let result = await getAvailablePeriods(
        moment(Date.now()).format("YYYY-MM-DD")
      );
      if (result.length > 0) {
        let filter = [];
        for (let i = 0; i < months.length; i++) {
          for (let e = 0; e < result.length; e++) {
            if (months[i].month === result[e]) {
              filter.push(months[i]);
            }
          }
        }
        setPeriods(filter);
      }
    } catch (error) {
      notification["error"]({
        message: `${error}`,
        description: "No se pudo obtener los periodos",
      });
    }
  }; */


  return (
    <>
      <Card>
        <Card.Header>
          <div className="container-products">
            {selection > 0 && <SwitchStandard
              beforeState={beforeState}
              afterState={afterState}
              valueSwitch={valueSwitch}
              /* onChangeSwitch={onChangeSwitch} */
							onChangeSwitch={UpdateOrders}
            />}
            <div className="icon-editar">
              <img src={iconEditar} alt="editar" />
            </div>
            <div className="header-title">
              <div className="item-details">
                <p>
                  Numero de órden <span>{saleId}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Fecha de órden <span>{getDateParsed(fechaPedido)}</span>
                </p>
              </div>
              <div className="item-details container-expand">
                <div className="item-details">
                  <p>
                    Precio <span>s/. {total}</span>
                  </p>
                </div>
                <Expand eventKey={`${ek}`} />
              </div>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={`${ek}`}>
          <Card.Body>
            <div className="container-products">
              <div className="item-details">
                <p>
                  Tipo de documento <span>DNI</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Método de pago <span>Tarjeta</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  # <span>{cant} </span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Acciones <span>{acciones}</span>
                </p>
              </div>
            </div>
            <div className="container-products">
              <div className="item-details">
                <p>
                  Enviar a <span>{cliente}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Teléfono <span>{contactoCliente}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Dirección de envio <span>{direccionCliente}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  SKU de producto <span>{sku}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Nombre del producto <span>{products[0]?.nombre}</span>
                </p>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default AccordionItem;
