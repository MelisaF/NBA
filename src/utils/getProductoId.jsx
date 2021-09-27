import {productos} from '../data/productos';

export const getProductoId =(id) => {
    return productos.find(producto => producto.id === id);
}