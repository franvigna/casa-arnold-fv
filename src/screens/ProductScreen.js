import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import products from '../products'
import { Container } from 'react-bootstrap'
import ModalForm from '../components/ModalForm'


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
                            loading='lazy'
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
                                    <strong>
                                        ${' '}
                                        {product.price
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                '.'
                                            )}
                                    </strong>
                                </h4>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <u>Descripción</u>
                                <br />
                                {product.description}
                            </ListGroup.Item>

                            <ListGroup.Item className='max-widht-3'>
                                <strong>
                                    {product.countInStock > 0
                                        ? ' Stock Disponible!'
                                        : ' No hay stock'}
                                </strong>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-center'>
                                <ModalForm stock={product.countInStock} name={product.name}/>
                                
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ProductScreen
