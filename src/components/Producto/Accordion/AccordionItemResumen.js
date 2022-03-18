import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import Expand from "./Expand";
import SwitchStandard from "./SwitchStandard";
import { getDateParsed } from "../../../utils/helpers/getDateParsed";

// import iconEditar from "../../../images/header/icon-edit.svg";
import "./AccordionItem.css";
import { updateStateOrders } from "../../../utils/helpers/request";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { loadOrdersByStore } from "../../../redux/actions/store";

const AccordionItem = ({
	_id,
  ek,
  // nombre,
  dni,
  total,
  contactoCliente,
  saleId,
  fechaPedido,
  numero,
  numeroDocumento,
  // tipoDocumento,
  // metodoPago,
  cant,
  acciones,
  cliente,
  direccionCliente,
  products,
	// estado,
  beforeState,
  afterState,
  valueSwitch,
	selection,
}) => {
  const dispatch = useDispatch();
  const { idActiveStore } = useSelector(state => state.store);
	const [stateSwitch, setStateSwitch] = useState(false);
  
	const updateOrders = async (_id) => {
    
    try {
      Swal.fire({
        title : "Actualizando orden...",
        text : "Espera un momento....",
        allowOutsideClick : false,
        didOpen: () => {
            Swal.showLoading();
        }
      })
			const res = await updateStateOrders(_id, afterState);
      Swal.close();

			if(res && res.response && res.response.ok) {
				setStateSwitch(!stateSwitch)
        Swal.fire('Orden actualizada', 'La orden ha sido actualizada correctamente' , 'success');
        updateLocalProducts();
			} else {
        Swal.fire('Error al actualizar orden', 'No se pudo actualizar la orden', 'error');
			}
    } catch (error) {
      Swal.close();
      Swal.fire('Error', 'Error inesperado', 'error');
    }
	};
  const handleUpdateOrder = async () => {
    const { isConfirmed } = await Swal.fire('¿Desea cambiar el estado de su orden?', 'Está seguro de cambiar el estado de su orden','info');

    if(isConfirmed){
      await updateOrders(_id);
    }
  }

  const updateLocalProducts = () => {
      if(idActiveStore){
          const state = selection === 0 ? "P" : selection === 1 ? "L" : "E";
          dispatch(loadOrdersByStore({id : idActiveStore, state, limit :9}))
      }
  }
  

  return (
    <>
      <Card>
        <Card.Header>
          <div className="container-products">
            {selection!==2 && 
              <SwitchStandard
                beforeState={beforeState}
                afterState={afterState}
                valueSwitch={valueSwitch}
                onChangeSwitch={handleUpdateOrder}
              />
            }
            <div className="header-title">
              <div className="item-details">
                <p>
                  Numero de orden <span>{numero}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Fecha de pedido <span>{getDateParsed(fechaPedido)}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Fecha de entrega <span>{getDateParsed(fechaPedido)}</span>
                </p>
              </div>
              <div className="item-details container-expand">
                <div className="item-details">
                  <p>
                    TOTAL <span>s/. {total}</span>
                  </p>
                </div>
                <Expand eventKey={`${ek}`} />
              </div>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={`${ek}`}>
          <Card.Body>
            {/* <div className="container-products">
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
            </div> */}
            <div className="container-products">
              <div className="item-details">
                <p>
                  Enviar a: <span>{cliente}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Dirección de envio: <span>{direccionCliente}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  Teléfono: <span>{contactoCliente}</span>
                </p>
              </div>
              <div className="item-details">
                <p>
                  DNI: <span>{numeroDocumento}</span>
                </p>
              </div>
            </div>
            {
              products && products.length >0 &&
              <div className="container-products">
                
                <p className="text-products-by-order">PRODUCTOS </p>
                {
                  products.map(( p , i)=>(
                    
                    <div key={`product-${i}`} className={`container-products ${i===0 ? 'without-border' : ''}`}>
  
                      <div className="item-details">
                        <p>
                          PRODUCTO {i+1} - {p.nombreTienda}
                        </p>
                      </div>
                      <div className="item-details">
                        <p>
                          SKU: <span>{p.sku || ''}</span>
                        </p>
                      </div>
                      <div className="item-details">
                        <p>
                          Nombre: <span>{p.nombre || ''}</span>
                        </p>
                      </div>
                      {
                        p && p.talla && p.talla.length && 
                        <div className="item-details">
                          <p>
                            Talla: <span>{p.talla || ''}</span>
                          </p>
                        </div>
                      }
                      {
                        p && p.color && p.color.length && 
                        <div className="item-details">
                          <p>
                            Color: <span>{p.color || ''}</span>
                          </p>
                        </div>
                      }
                      <div className="item-details">
                        <p>
                          Cantidad: <span>{p.cantidad || ''}</span>
                        </p>
                      </div>
                      <div className="wrapper-subtotal-product">
                        <div className="item-details">
                          <p>
                            Precio unitario: <span>{p.precioUnitario || ''}</span>
                          </p>
                        </div>
                        <div className="item-details">
                          <p>
                            Subtotal: <span>{p.subTotal || ''}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
            
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default AccordionItem;
