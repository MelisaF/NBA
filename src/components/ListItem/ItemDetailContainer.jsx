
export const ItemDetailContainer =() => {


const pedido = fetch('https://fakestoreapi.com/products?limit=5');

pedido
    .then((res)=> {
        return res.json();
        
    })

    .catch((error)=> {
        console.log(error);
    })
}