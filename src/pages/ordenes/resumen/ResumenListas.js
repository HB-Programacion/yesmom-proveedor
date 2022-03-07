import React, { useState } from "react";
import AccordionResumen from "../../../components/Producto/Accordion/AccordionResumen";


const ResumenListas = ({ products = [], beforeState, afterState, selection }) => {
  const [stateSwitch, setStateSwitch] = useState(false);


  return (
    <AccordionResumen
      data={products}
      beforeState={beforeState}
      afterState={afterState}
      valueSwitch={stateSwitch}
			selection={selection}
      onChangeSwitch={() => setStateSwitch(!stateSwitch)}
    />
  );
};

export default ResumenListas;
