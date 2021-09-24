import {Card, Button} from 'react-bootstrap';

export const ItemDetail = ({image, id, price, description})=> {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} className="card-img-top" alt="clothing" />
                <Card.Body>
                    <Card.Title>{id} - {description}</Card.Title>
                    <Card.Text>$ {price}</Card.Text>
                    <Button variant="dark">COMPRAR</Button>
                </Card.Body>
            </Card>
        </div>
    )
}