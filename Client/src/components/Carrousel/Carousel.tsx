import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import './Carousel.css'

const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img className='imgSize img-fluid' src="https://img.freepik.com/foto-gratis/tazas-cafe-fondo-pantalla-textura-azul_53876-167252.jpg?w=996&t=st=1699891867~exp=1699892467~hmac=9b1b2d87d0bc0bf85e003b6785f0e2c2f7a4674ad736a523af9968d68a47b3c1" alt="Imagen de café de autor" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='imgSize img-fluid' src="https://img.freepik.com/foto-gratis/vista-superior-cafe-sabroso-granos-cafe_1220-388.jpg?w=826&t=st=1699890955~exp=1699891555~hmac=143f6bd76480fb0a7bdacd99b461b76c28c052d3de600bfd582cdf66bcda52f5" alt="Imagen de café de autor" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className='imgSize img-fluid' src="https://img.freepik.com/vector-gratis/portada-facebook-plantacion-cafe-diseno-plano_23-2149403417.jpg?w=826&t=st=1699891816~exp=1699892416~hmac=1e687877a5b076ab491a7d6690329d4400ca389363726cf740a5c856065f0259" alt="Imagen de café de autor" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carrusel
