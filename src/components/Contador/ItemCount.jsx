import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemCount = () => {
    const [valor, setValor] = useState(0);
    
    const handleSum = () => {
        setValor(valor + 1);
    }
    const handleRes = () => {
        if(valor === 0) {
            return;
        }
        setValor (valor - 1);
    }
    const handleAdd = ()=> {
        
    }
    
    return (
        <div>
            <Link className="btn btn-dark me-3 mt-3" onClick= {handleRes}>−</Link>
            <span>0</span>
            <Link className="btn btn-dark ms-3 mt-3" onClick= {handleSum}>+</Link>
        </div>
    )
}