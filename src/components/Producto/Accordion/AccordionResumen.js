import React, { useState } from "react";
import { Row, Accordion, Col } from "react-bootstrap";
import AccordionItemResumen from "./AccordionItemResumen";

const AccordionProduct = ({
  data,
  loading,
  beforeState,
  afterState,
  valueSwitch,
	selection,
  /* onChangeSwitch, */
}) => {
	


  return (
    <Accordion>
      {/* {loading ? (
        <Row
          className="justify-content-md-center"
          style={{ transition: "all 0.6 ease" }}
        >
          <Col md="auto">
            <h5>Loading...</h5>
          </Col>
        </Row>
      ) : ( */}
        <Row>
          {data.map((el, i) => (
            <Col key={i} xs={12} md={6} xl={4}>
              <AccordionItemResumen
                ek={i}
                {...el}
                beforeState={beforeState}
                afterState={afterState}
								valueSwitch={valueSwitch} 
								selection={selection}
								/* onChangeSwitch={onChangeSwitch} */
              />
            </Col>
          ))}
        </Row>
      {/* )} */}
    </Accordion>
  );
};

export default AccordionProduct;
