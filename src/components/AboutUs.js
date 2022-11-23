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
                    <Col className='text-center about-card py-2'>
                        <div className='icon-contain'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faCreditCard}
                        />
                        </div>
                        <div className='text-contain'>
                        <p className='about-title'>Medios de pago</p>
                        <p className='about-text '>Efectivo y Mercado Pago</p>
                        </div>
                    </Col>

                    <Col  className='text-center about-card py-2'>
                    <div className='icon-contain'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faTruckFast}
                        />
                        </div>
                        <div className='text-contain'>
                        <p className='about-title'>Envios Gratis</p>
                        <p className='about-text '>A toda zona oeste</p>
                        </div>
                    </Col>

                    <Col className='text-center about-card py-2'>
                    <div className='icon-contain'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faMoneyBill}
                        />
                        </div>
                        <div className='text-contain'>
                        <p className='about-title'>Financiación</p>
                        <p className='about-text '> Cuotas Semanales, Quinsenales y Mensuales</p>
                        </div>

                    </Col>

                    <Col  className='text-center about-card py-2'>
                    <div className='icon-contain'>
                        <FontAwesomeIcon
                            className='about-icon'
                            icon={faShieldHalved}
                        />
                        </div>
                        <div className='text-contain'>
                        <p className='about-title'>Garantía Asegurada</p>
                        <p className='about-text '>Productos directo de fábrica</p>
                        </div>
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
