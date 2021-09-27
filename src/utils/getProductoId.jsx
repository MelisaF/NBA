import {productos} from '../data/productos';

export const getProductoId =(id) => {
    console.log(getProductoId)
    return productos.find(producto => producto.id === id);
}