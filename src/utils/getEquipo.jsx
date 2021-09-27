import {productos} from '../data/productos'

export const getEquipo = (equipo) => {
    return productos.filter(product => product.equipo === equipo);
}