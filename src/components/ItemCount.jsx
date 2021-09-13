import React from "react";
import {useState} from "react";
import "./ItemCount.css";


const  ItemCount = ({stock, initial,onAdd}) => {
const [contador, setContador] = useState(0);
    if((contador <= stock)|| (contador >=initial)) {
        return (
            <div>
                <p>Producto : {contador}</p>
                <button className="btnContador" onClick={()=> {setContador(0)}}>Reset</button>
                <button className="btnContador" onClick={()=> {setContador(contador+1)}}>+</button>
                <button onClick={()=>{setContador(contador-1)}} >-</button>
                <button className="btnCompra" onAdd={()=>{}}>Comprar</button>
            </div>
        )
    }
}



export default ItemCount;