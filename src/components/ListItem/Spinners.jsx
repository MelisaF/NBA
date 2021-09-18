import {Spinner} from 'react-bootstrap'
import '../ListItem/Item.css'
export const Spinners =() => {
    return (
        <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}
