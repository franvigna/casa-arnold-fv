import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-1 rounded'>
            <Link to={`/product/${product._id}`}>
                <LazyLoadImage className='card-img-top' src={product.image} variant='top'/>
            </Link>
            <Card.Body className='p-4'>
                <Link to={`/product/${product._id}`}>
                    <Card.Title className='nombre-product' as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text className='precio-contado' as='p'>
                    PRECIO AL CONTADO
                </Card.Text>
                <Card.Text className='precio' as='h3'>
                    ${' '}
                    {product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </Card.Text>
                <Card.Text className='envio-gratis' as='p'>
                    Envio Gratis
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
