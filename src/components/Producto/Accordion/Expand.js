import React, { useContext } from 'react'
import { AccordionContext, useAccordionToggle } from 'react-bootstrap';

function Expand({eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  

    return (
        <>
            <div className="btn-click" onClick={decoratedOnClick} >
                <p className="detalles">Detalles</p>
                
                <svg className={`${isCurrentEventKey ? "active" :"no-active"}`} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00941 0.00202756C6.20933 0.00163606 6.40308 0.0713501 6.55702 0.199068L11.6909 4.48257C11.8656 4.62798 11.9755 4.83694 11.9964 5.06348C12.0172 5.29001 11.9474 5.51556 11.8021 5.69052C11.6569 5.86547 11.4482 5.97549 11.2219 5.99637C10.9957 6.01726 10.7704 5.9473 10.5957 5.80189L6.00941 1.96387L1.42315 5.66481C1.33563 5.73598 1.23492 5.78912 1.12682 5.82119C1.01872 5.85326 0.905356 5.86362 0.793242 5.85167C0.681128 5.83973 0.572476 5.80572 0.473533 5.7516C0.374588 5.69748 0.287303 5.62432 0.216692 5.53631C0.138332 5.44822 0.0789861 5.34488 0.0423707 5.23276C0.00575535 5.12064 -0.00733861 5.00216 0.00390711 4.88474C0.0151528 4.76732 0.050496 4.65349 0.107724 4.55038C0.164953 4.44727 0.242833 4.3571 0.336484 4.28553L5.47035 0.147667C5.62872 0.0401369 5.81852 -0.0111408 6.00941 0.00202756Z" fill="#556EA1"/>
                </svg>

            </div>
        </>
    );
}

export default Expand
