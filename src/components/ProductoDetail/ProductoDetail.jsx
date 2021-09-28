import {useParams} from 'react-router';
import {getProductoId} from '../../utils/getProductoId';
import {Link} from 'react-router-dom';
import { ItemCount } from '../Contador/ItemCount';
import '../estilos.css';

export const ProductoDetail = () => {
    const {id} = useParams();

    const productoDetail = getProductoId (parseInt(id));

    let path= '/';

    if (productoDetail.equipo === "ATLANTA") { 
        path= '/atlanta' 
    }
    else if (productoDetail.equipo === "CELTICS") {
        path= '/celtics'
    }
    else {
        path= '/chicago'
    }

    return (
        <div className="container mt-3">
            <h1>{productoDetail.equipo}</h1>
            <div className="detalleProducto-container">
                <div className="img-container">
                    <img src={productoDetail.img} alt={productoDetail.modelo}/>
                </div>
                <div className="description-container">
                    <h3>Modelo: {productoDetail.modelo}</h3>
                    <h5>Nombre: {productoDetail.nombre}</h5>
                    <h5>Precio: $ {productoDetail.precio}</h5>
                    <hr/>
                    <ItemCount/>
                </div>
            </div>
            <Link className="btn btn-dark mt-3" to={path}>Volver</Link>
            
        </div>
    )
}