import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import CartScreen from './screens/CartScreen'
import AllProductsScreen from './screens/AllProductsScreen'

const App = () => {
    return (
        <Router>
            <Header />

            <main className='pb-3'>
                <Routes>
                    <Route exact path='/' element={<HomeScreen />} />
                    <Route path='/product/:id' element={<ProductScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/cart' element={<CartScreen />} />
                    <Route path='/allproducts' element={<AllProductsScreen />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App
