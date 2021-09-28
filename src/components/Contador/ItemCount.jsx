import {useState} from "react";

export const ItemCount = () => {
    const [valor, setValor] = useState(0);
    const [cart, setCart] = useState(0);
    
    const onSum = () => {
        setValor(valor + 1);
    }
    const onRes = () => {
        if(valor === 0) {
            return;
        }
        setValor (valor - 1);
    }
    const onAdd = ()=> {
        setCart(cart + valor);
    }
    return (
        <div>
            <span className="btn btn-dark mt-3" onClick= {onAdd}>Agregar al carrito</span>
            <div>
                <span className="btn btn-dark me-3 mt-3" onClick= {onRes}>−</span>
                <span>{valor}</span>
                <span className="btn btn-dark ms-3 mt-3" onClick= {onSum}>+</span>
            </div>
        </div>
    )
}