import React from 'react';
import {useState, useEffect} from 'react';
import {ItemDetail} from './ItemDetail'; 

export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [imageURL, setImageURL] = useState('');
    
    useEffect(()=> {
        getProducts();
    }, []);
    
    console.log(products)
    
    const getProducts = async () => {
        const arrayProduct = [];
        const resp = await fetch('https://fakestoreapi.com/products?limit=5');
        const {category,image} = await resp.json();
        for (let product of category) {
            const resp = await fetch(product.image);
            const data = await resp.json();
            console.log(data)
            //arrayProduct.push(data);
        }
        //setProducts(arrayProduct);
        //setImageURL(image);
       
    }

    
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <ItemDetail id= {product.id} key= {product.id} category= {product.category} image={product.image}/>
                ))}
            </ul>
        </div>

    )

}