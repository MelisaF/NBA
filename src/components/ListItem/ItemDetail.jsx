import {Card, Button} from 'react-bootstrap';

export const ItemDetail = (image, id, price, category, description)=> {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="dark">COMPRAR</Button>
                </Card.Body>
            </Card>
        </div>
    )
}