import {getEquipo} from '../utils/getEquipo';
import {CardProductos} from './Card/CardProductos'

export const ListProductos = ({equipo}) => {
    const productos = getEquipo(equipo);
    return (
        <div className="container-productos">
                {productos.map((producto => (
                    <CardProductos
                        key= {producto.id}
                        img= {producto.img}
                        id ={producto.id}
                        nombre= {producto.nombre}
                        modelo= {producto.modelo}
                        precio= {producto.precio}
                    />)
                ))}
        </div>
    )
}