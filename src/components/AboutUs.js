import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTruckFast,
    faCreditCard,
    faShieldHalved,
    faMoneyBill
} from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';


const AboutUs = () => {
    return (
        <div >
            <Container className='about-cards-containter'>
                <Row className='aboutus-containter'>
                    <Col >  
                        <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <div  className='icon-contain'>
                                    <FontAwesomeIcon
                                        className='about-icon'
                                        icon={faCreditCard}
                                    />
                                </div>
                                <div className='text-contain'>
                                        <p className='about-title'>Medios de Pago</p>
                                </div>
                            </Accordion.Header>
                                <Accordion.Body>
                                <div className='text-contain'>
                                    <p className='about-text '>Efectivo y Mercado Pago</p> 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </Col>

                    <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                        <div className='icon-contain'>
                            <FontAwesomeIcon
                                className='about-icon'
                                icon={faTruckFast}
                            />
                            </div>
                        <div className='text-contain'>
                        <p className='about-title'>Envios Gratis</p>
                        </div>
                        </Accordion.Header>
                                <Accordion.Body>
                    <div className='text-contain'>
                        <p className='about-text '>A toda zona oeste</p>
                        </div>
                        </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </Col>

                    <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                    <div className='icon-contain'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faMoneyBill}
                        />
                        </div>
                        <div className='text-contain'>
                        <p className='about-title'>Financiación</p>
                        </div>
                        </Accordion.Header>
                                <Accordion.Body>
                        <div className='text-contain'>
                        <p className='about-text '> Cuotas Semanales, Quinsenales y Mensuales</p>
                        </div>
                        </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </Col>

                    <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                    <div className='icon-contain'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faShieldHalved}
                        />
                        </div>
                        <div className='text-contain'>
                        <p className='about-title'>Garantía Asegurada</p>
                        </div>
                        </Accordion.Header>
                                <Accordion.Body>
                        <div className='text-contain'>
                        <p className='about-text '>Productos directo de fábrica</p>
                        </div>
                        </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </Col>

                    
                </Row>
            </Container>
        </div>

    )
}

export default AboutUs
