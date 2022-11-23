import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'


export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        
      ]
  
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='categories-item text-center'>
            <Link to='/category/Celulares'>
            <div className="categories-img">
                <img className="img-category" src="/images/MotoG52.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Celulares</h3>
          </div>

          <div className='categories-item text-center'>
          <Link to='/category/SmartTV'>
            <div className="categories-img">
                <img className="img-category" src="/images/SmartPhilips65-4k.jpg" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Smart TV</h3>
          </div>
          <div className='categories-item text-center'>
          <Link to='/category/Climatización'>
          <div className="categories-img">
                <img className="img-category" src="/images/AireacondicionadoAlaska2322Frigorias.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Climatización</h3>
          </div>
          <div className='categories-item text-center'>
            <Link to='/category/Lavado'>
            <div className="categories-img">
                <img className="img-category" src="/images/LavarropasAutomaticoDreanNext.jpg" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Lavado</h3>
          </div>
          <div className='categories-item text-center'>
          <Link to='/category/Refrigeración'>
          <div className="categories-img">
                <img className="img-category" src="/images/ConservadoraCorona.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Heladeras</h3>
          </div>
          <div className='categories-item text-center'>
          <Link to='/category/Termotanques'>
          <div className="categories-img">
                <img className="img-category" src="/images/TermotanqueElectricoVitta.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Agua Caliente</h3>
          </div>
          <div className='categories-item text-center'>
          <Link to='/category/Cocinas'>
          <div className="categories-img">
                <img className="img-category" src="/images/FreidoraUltraRapida10L.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Cocinas</h3>
          </div>
          <div className='categories-item text-center'>
            <Link to='/category/Bicicletas'>
            <div className="categories-img">
                <img className="img-category" src="/images/BicicletaFuturaMontainbike.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Bicicletas</h3>
          </div>
          <div className='categories-item text-center'>
          <Link to='/category/Pequeños'>
          <div className="categories-img">
                <img className="img-category" src="/images/SamsungA03.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Pequeños</h3>
          </div>
          <div className='categories-item text-center'>
          <Link to='/category/Notebooks'>
          <div className="categories-img">
                <img className="img-category" src="/images/NotebookInjooVoomMax.png" alt='category' />
            </div>
            </Link>
            <h3 className="categories-name">Notebooks</h3>
          </div>
        </Slider>
      </div>
    );
  }
}