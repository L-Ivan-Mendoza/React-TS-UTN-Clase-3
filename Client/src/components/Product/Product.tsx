import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Product = ( props: any ) => {

    const {name, description, price, sku, stock, url} = props

    return (
        <>
    <Card style={{ width: '18rem' }} className='m-3'>
      <Card.Img variant="top" src="" />
      <img src={url} alt="Imagen de Café de autor" />
      <Card.Body>
        <Card.Title><h6>{name}</h6></Card.Title>
        <Card.Text>
          <p>Descripción: {description}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><p>Precio: ${price}</p></ListGroup.Item>
        <ListGroup.Item><p>SKU: {sku}</p></ListGroup.Item>
        <ListGroup.Item><p>Cantidad: {stock}</p></ListGroup.Item>
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