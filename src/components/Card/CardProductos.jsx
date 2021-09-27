import {Card} from "react-bootstrap";
import {Link} from 'react-router-dom'
import '../estilos.css'

export const CardProductos = ({img, id, nombre, modelo, precio}) => {
    return (
        <Card border="0" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} alt={modelo}/>
            <Card.Body>
                <Card.Title>
                    ID: {id} <br/>
                    NOMBRE: {nombre}<br/>
                    MODELO: {modelo}<br/>
                </Card.Title>
                <Card.Text>
                    $ {precio}
                </Card.Text>
                <Link to={`/producto/${id}`}className="btn btn-dark btn-compra">COMPRAR</Link>
            </Card.Body>
        </Card>
    )
}