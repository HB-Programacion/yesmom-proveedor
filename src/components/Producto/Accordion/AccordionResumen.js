import React from 'react'
import { Row, Accordion, Col } from 'react-bootstrap'
import AccordionItemResumen from './AccordionItemResumen'

const AccordionProduct =({data}) => {
    
    return (
        <Accordion>
            <Row>
                {
                    data.map((el, i) => (
                        <Col key={i} xs={12} md={6} xl={4}>
                            <AccordionItemResumen ek={i} {...el} />
                        </Col>
                    ))
                }
            </Row>
        </Accordion>
    )
}

export default AccordionProduct
