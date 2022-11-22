import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTruckFast,
    faCreditCard,
    faShieldHalved,
    faMoneyBill
} from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {
    return (
        <div >
            <Container className='about-cards-containter'>
                <Row className='aboutus-containter'>
                    <Col  className='text-center about-card py-3'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faCreditCard}
                        />
                        <p className='about-title'>Medios de pago</p>
                        <p className='about-text '>Efectivo y Mercado Pago</p>
                    </Col>

                    <Col  className='text-center about-card py-3'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faTruckFast}
                        />
                        <p className='about-title'>Envios Gratis</p>
                        <p className='about-text '>A toda zona oeste</p>
                    </Col>
                    
                    <Col className='text-center about-card py-3'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faMoneyBill}
                        />
                        <p className='about-title'>Financiación</p>
                        <p className='about-text '> Cuotas Semanales, Quinsenales y Mensuales</p>
                    </Col>

                    <Col  className='text-center about-card py-3'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faShieldHalved}
                        />
                        <p className='about-title'>Garantía Asegurada</p>
                        <p className='about-text '>Directo de fábrica</p>
                    </Col>

                    
                </Row>
            </Container>
        </div>

        // <div>
        // <h3 className='text-center'>No hay productos en el Carrito de Compras...</h3>
        // </div>
    )
}

export default AboutUs
