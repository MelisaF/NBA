import {useEffect, useState} from 'react';
import {ItemList} from '../ListItem/ItemList';
import {Spinners} from '../ListItem/Spinners';

const productosSimulador = [  
    {img: "/imgCamisetas/atlanta11.jpg",
        equipo: "ATLANTA",
        nombre: "HAWKS TRAE YOUNG",
        modelo:"NIKE RED 2019/20",
        precio: 1888,
        cantidad:10, 
        id:1},

        {img:"/imgCamisetas/celticsBird.webp", 
        equipo:"CELTICS", 
        nombre:"LARRY BIRD MITCHELL & NESS KELLY",
        modelo: "GREEN HARDWOOD CLASSICS",
        precio: 1999, 
        cantidad:10,
        id:2}

]

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect (() => {
        const asyncMock = new Promise((resolver) =>{
            setTimeout(() => {
                resolver(productosSimulador)
            }, 2000)
    }) 
    
    asyncMock
        .then ((resultado) => {
            setProductos (resultado);
    })
    })

    if(productos.length > 0) {
        return(
                <>
                    <ItemList productos = {productos}/>
                </>
        );
    }
    else {
        return (
            <>
                <Spinners/>
            </>
        )
    }
}