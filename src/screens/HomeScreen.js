import React from 'react'
import { Container} from 'react-bootstrap'
import AboutUs from '../components/AboutUs'
// import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Category from '../components/Category';

const HomeScreen = () => {
    return (
        <div>
            {/* <Hero /> */}
            <Container>
                <Category />
                <AboutUs />
                
                
                    <h2>Climatizate</h2>
                    <Carousel category='Climatización' />
        

                
                    <h2>Bicicletas</h2>
                    <Carousel category='Bicicleta' />
                

                
                    <h2>Celulares</h2>
                    <Carousel category='Celulares' />
               
                

            </Container>
        </div>
    )
}

export default HomeScreen
