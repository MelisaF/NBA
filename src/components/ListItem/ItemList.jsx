import {Item} from './Item'

export const ItemList = ({productos}) => {
    return (
        <ul>
            {productos.map ((producto, indice) => {
                return <Item producto ={producto}/>
            })}
        </ul>
            
    )
}