import React from "react";
import {Button} from "../components/Button";
import './Navbar/Navbar.css';

const CartWidget = () => {
    return (
        <div className="btn-icon">
            <Button><i className="fas fa-user"></i></Button>
            <Button><i className="fas fa-shopping-cart"></i></Button>
        </div>
    )
}

export default CartWidget;