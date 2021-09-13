import React from "react";
import {useState} from "react";
import "./ItemCount.css";

const ItemCount = () => {
    const [stock, setStock] = useState(0);
    return (
        <div>
            <p>Producto : {stock}</p>
            <button onClick={()=> {setStock(stock+1)}}>Agregar</button>
            <button className="btnCompra">Comprar</button>
        </div>
    )
}

export default ItemCount;