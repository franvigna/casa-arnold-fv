import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'
import products from '../products'

const HomeScreen = () => {
    return (
        <div>
            <Hero />
            <Container>
                <AboutUs />
                <h2>Celulares</h2>
                <Row>
                    {products
                        //filtrar la categoria telefono
                        .filter((product) => {
                            return product.category === 'SmartPhone'
                        })

                        //Ordenar por menor precio
                        .sort((a, b) => (a.price > b.price) ? 1 : -1)

                        //acortar el array a 4
                        .slice(0, 4)  

                        //mapear los objetos
                        .map((product) => {
                            
                            return (
                                <Col
                                    key={product._id}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                >
                                    <Product product={product} />
                                </Col>
                            )
                        })}
                </Row>
                <h2>Climatizate</h2>
                <Row>
                    {products
                        .filter((product) => {
                            return product.category === 'Climatización'
                        })
                        .map((product) => {
                            return (
                                <Col
                                    key={product._id}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                >
                                    <Product product={product} />
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen
