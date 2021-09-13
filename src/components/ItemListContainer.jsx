import React from "react";
import "../App.css";
import ItemCount from "../components/ItemCount";

export const ItemListContainer = ({shop}) => {
    return (
        <div className="shop-text">{shop}
        <ItemCount stock={10} initial= {1} onAdd={() =>{}} />
        </div>
    )
    
}
