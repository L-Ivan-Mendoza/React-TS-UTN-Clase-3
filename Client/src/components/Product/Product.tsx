import NameProduct from './ComponenteProducto/NombreProducto';
import DescriptionProduct from './ComponenteProducto/DescripcionProducto';
import PriceProduct from './ComponenteProducto/PrecioProducto';
import SkuProduct from './ComponenteProducto/SkuProducto';
import StockProduct from './ComponenteProducto/StockProducto';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
//import CardImg from 'react-bootstrap/CardImg'

const Product = () => {
    return (
        <>
    <Card style={{ width: '18rem' }} className='m-3'>
      <Card.Img variant="top" src="" />
      <img src="./src/assets/Img/coffee.jpg" alt="Imagen de Café de autor" />
      <Card.Body>
        <Card.Title><NameProduct/></Card.Title>
        <Card.Text>
          <DescriptionProduct/>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><PriceProduct/></ListGroup.Item>
        <ListGroup.Item><SkuProduct/></ListGroup.Item>
        <ListGroup.Item><StockProduct/></ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" className='m-1'>Ver Producto</Button>
      <Button variant="danger" className='m-1'>Agregar al carro</Button>
      </Card.Body>
    </Card>
        </>
    )
}

export default Product;