import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'
import { Container } from 'react-bootstrap'

const ProductScreen = ({ match }) => {
    const { id } = useParams()
    const product = products.find((p) => String(p._id) === id)

    return (
        <Container>
            <Link className='btn btn-secondary my-3 btn-sm ' to='/'>
                Volver
            </Link>
            <Card className='bg-light m-6'>
                <Row className='content-product '>
                    <Col className='products-container' md={12} lg={7}>
                        {/* fluid es para que la imagen no se pase */}
                        <Image
                            className='img-products img rounded mx-auto d-block'
                            src={product.image}
                            alt={product.name}
                            fluid
                        />
                    </Col>
                    <Col md={12} lg={5}>
                        <ListGroup
                            variant='flush'
                            className='bg-white rounded mx-4 px-3'
                        >
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>
                                    <strong>$ {product.price}</strong>
                                </h4>
                            </ListGroup.Item>
                            

                            <ListGroup.Item>
                            <u>Descripción</u><br/>
                                {product.description}
                            </ListGroup.Item>

                            <ListGroup.Item className='max-widht-3'>
                            <strong>{product.countInStock > 0
                                    ? ' Stock Disponible!'
                                    : ' No hay stock'}</strong>
                                
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-center'>
                                <Button
                                    className='btn-block my-3 btn-primary '
                                    type='button'
                                    disabled={product.countInStock === 0}
                                    href={`https://api.whatsapp.com/send?phone=5491138658887&text=Hola, quiero más información del producto: ${product.name}`}
                                    target='_blank'
                                >
                                    Consultar Producto
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ProductScreen