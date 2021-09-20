import {useEffect, useState} from 'react';
import {ItemList} from '../ListItem/ItemList';
import {Spinners} from '../ListItem/Spinners';
import {ProductosSimulador} from '../ListItem/productosSimulador';
import { ItemDetailContainer } from './ItemDetailContainer';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect (() => {
        const asyncMock = new Promise((resolver) =>{
            setTimeout(() => {
                resolver(ProductosSimulador)
            }, 2000)
        }) 
    
        asyncMock.then ((resultado) => {
            setProductos (resultado);
        })
    })

    if(productos.length > 0) {
        return(
                <>
                    <ItemList productos = {productos}/>
                    <ItemDetailContainer/>
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