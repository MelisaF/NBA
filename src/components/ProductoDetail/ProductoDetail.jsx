import {useParams} from 'react-router';
import {getProductoId} from '../../utils/getProductoId';

export const ProductoDetail = () => {
    const {id} = useParams();

    const productoDetail = getProductoId (id);

    return (
        <div>
            <h1>{productoDetail}</h1>
            
        </div>
    )
}