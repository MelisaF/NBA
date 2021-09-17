import {Spinner} from 'react-bootstrap'

export const Spinners =() => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}
