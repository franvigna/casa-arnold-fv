import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Casa Arnold 2023
                    </Col>
                </Row>
                <div className='text-center contact-programmer'>
                    Contacto del programador:
                    <a href="http://www.linkedin.com/in/franciscovignardel">
                    <b> vignardel.francisco@gmail.com</b>
                    </a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
