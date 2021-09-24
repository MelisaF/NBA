import React from 'react';
import { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import './Item.css'

export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const resp = await fetch('https://fakestoreapi.com/products?limit=5');
        const data = await resp.json();
        setProducts(data);
    }

    return (
        <div>
            <ul className="product-list">
                {products.map((product) => {
                    return ( 
                            <ItemDetail 
                                key= {product.id}
                                image= {product.image}
                                id= {product.id} 
                                description= {product.description}
                                price= {product.price}
                            />
                    )
                })}
            </ul>
        </div>

    )

}