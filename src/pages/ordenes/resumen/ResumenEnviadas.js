import React, { useState } from "react";
import AccordionResumen from "../../../components/Producto/Accordion/AccordionResumen";

const ResumenListas = ({ products = [], loading, beforeState, afterState, selection }) => {
	const [stateSwitch, setStateSwitch] = useState(false);

	console.log('//---',products);

	/* console.log('stateOrder',stateOrder); */

  return (
    <AccordionResumen
      data={products}
      loading={loading}
      beforeState={beforeState}
      afterState={afterState}
      valueSwitch={stateSwitch} 
			selection={selection}
			onChangeSwitch={()=> setStateSwitch(!stateSwitch)}
    />
  );
};

export default ResumenListas;
