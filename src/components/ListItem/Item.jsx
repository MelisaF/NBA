import {Card, Button} from 'react-bootstrap';


export const Item = ({producto}) => {
    return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Body>
                        <Card.Title>{producto.equipo}</Card.Title><br/>
                        <Card.Text>
                            {producto.nombre}<br/>
                            {producto.modelo}<br/>
                            ${producto.precio}<br/>
                        </Card.Text>
                        <Button variant="light">AÑADIR AL CARRITO</Button>
                    </Card.Body>
                </Card>
            </div>

    )
}