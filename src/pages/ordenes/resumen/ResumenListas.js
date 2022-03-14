import React, { useState } from "react";
import AccordionResumen from "../../../components/Producto/Accordion/AccordionResumen";


const ResumenListas = ({ products = [], beforeState, afterState, selection }) => {
  const [stateSwitch, setStateSwitch] = useState(false);


  return (
    <>
    {
      products.length > 0 ? 
      <AccordionResumen
        data={products}
        beforeState={beforeState}
        afterState={afterState}
        valueSwitch={stateSwitch}
        selection={selection}
        onChangeSwitch={() => setStateSwitch(!stateSwitch)}
      /> : <p className="zero-orders">No existen ordenes</p> 
    }
    </>
    
  );
};

export default ResumenListas;
