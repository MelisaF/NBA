import { ListProductos } from "../ListProductos"

export const PaginaInicio = () => {
    return (
        <div className="container mt-3">
            <h1>NUESTROS PRODUCTOS</h1>
            <ListProductos equipo= "ATLANTA"/>
            <ListProductos equipo= "CELTICS"/>
            <ListProductos equipo= "CHICAGO BULLS"/>
        </div>
    )
}