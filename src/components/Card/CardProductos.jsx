import {Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../estilos.css';


export const CardProductos = ({img, id, precio, nombre, modelo}) => {
    return (
        <Card border="0" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} alt={modelo}/>
            <Card.Body>
                <Card.Title>
                    Id: {id} <br/>
                    Precio: ${precio} <br/>
                    Nombre: {nombre}<br/>
                    Modelo: {modelo}<br/>
                </Card.Title>
                <Link to={`/producto/${id}`}className="btn btn-dark btn-compra">VER DETALLE</Link>
            </Card.Body>
        </Card>
    )
}