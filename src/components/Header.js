import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar,  Container } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <Navbar bg='primary' variant='dark'>
                <Container className='header-container'>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img className='img-logo' src='/images/logo.webp' alt='logo' />

                        </Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/allproducts'>
                    <Navbar.Brand>
                        <p className='text-center all-products'>Todos los productos</p>
                    </Navbar.Brand>
                </LinkContainer>
                    {/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            
                            <LinkContainer to='/cart'>
                                <Nav.Link href='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} />{' '}
                                    Carrito
                                </Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faUser} /> Iniciar
                                    Sesión
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
