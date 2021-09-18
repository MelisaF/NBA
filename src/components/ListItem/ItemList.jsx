import {Item} from './Item';
import '../ListItem/Item.css';

export const ItemList = ({productos}) => {
    return (
        <ul className="productos-row">
            {productos.map (producto => {
                return <Item
                    key= {producto.id} 
                    producto ={producto}
                />
            })}
        </ul>
            
    )
}