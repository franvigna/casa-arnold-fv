import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container } from 'react-bootstrap'
import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const HomeScreen = () => {
    return (
        <div>
            <Hero />
            <Container>
                <AboutUs />
                <LinkContainer to='/allproducts'>
                    <Navbar.Brand>
                        <p className='text-center'>Todos los productos</p>
                    </Navbar.Brand>
                </LinkContainer>
                <h2>Climatizate</h2>
                <Carousel category='Climatización' />

                <h2>Bicicletas</h2>
                <Carousel category='Bicicleta' />

                <h2>Celulares</h2>
                <Carousel category='SmartPhone' />

            </Container>
        </div>
    )
}

export default HomeScreen
