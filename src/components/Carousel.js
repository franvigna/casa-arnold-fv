import React, { Component } from 'react'
import Slider from 'react-slick'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
import products from '../products'

export default class SwipeToSlide extends Component {
    render() {
        const { category } = this.props
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  initialSlide: 2
                }
              },
              
            ]
          };
        return (
            <Row className='carousel-products'>

                <Slider {...settings}>
                    {products
                        //filtrar la categoria telefono
                        .filter((product) => {
                            return product.category === `${category}`
                        })
                        //Ordenar por menor precio
                        .sort((a, b) => (a.price > b.price ? 1 : -1))
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
                </Slider>
            </Row>
        )
    }
}
