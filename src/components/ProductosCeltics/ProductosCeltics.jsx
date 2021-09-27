import React from 'react';
import { ListProductos } from '../ListProductos';
import "../estilos.css";
export const ProductosCeltics = () => {
    return (
        <div className="container mt-3">
            <h1>CELTICS</h1>
            <hr/>
            <ListProductos equipo= "CELTICS"/>
        </div>
    )
}