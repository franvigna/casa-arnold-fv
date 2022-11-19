import React, { Component } from 'react'
import Slider from 'react-slick'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
import products from '../products'

export default class SwipeToSlide extends Component {
    render() {
        const { category } = this.props
        const settings = {
            className: 'center',
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 4,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${
                        index + 1
                    }, background: #222; color: #bada55`
                )
            },
        }
        return (
            <Row>

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
