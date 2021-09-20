import './Navbar.css';
import {FaShoppingCart, FaUserAlt} from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="btn-icon">
            <FaUserAlt className="icons"/>
            <FaShoppingCart className="icons"/>
            <span className="icons">0</span>
        </div>
    )
}

export default CartWidget;