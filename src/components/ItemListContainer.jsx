import React from "react";
import "../App.css";
import ItemCount from "../components/ItemCount";

export const ItemListContainer = ({shop}) => {
    return (
        <div className="shop-text">{shop}
        <ItemCount/>
        </div>
    )
    
}
