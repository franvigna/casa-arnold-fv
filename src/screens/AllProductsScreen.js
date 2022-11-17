import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import products from '../products'
import Product from '../components/Product'

const AllProductsScreen = () => {
    return (
        <Container>
            <Link className='btn btn-secondary my-3 btn-sm ' to='/'>
                Volver
            </Link>
            <h2 className=' text-center'>Todos los productos</h2>
            <Row>
                {products
                    .sort((a, b) => (a._id < b._id ? 1 : -1))
                    //mapear los objetos
                    .map((product) => {
                        return (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )
}

export default AllProductsScreen
