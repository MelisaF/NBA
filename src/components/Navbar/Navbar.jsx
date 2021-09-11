import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import {Button} from "../Button";
import './Navbar.css';

class Navbar extends Component {
    state = {clicked : false}
    handleClick = () => {
        this.setState ({ clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="Navbar-items">
                <h1 className="navbar-title">Classic NBA</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key= {index}>
                                <a className={item.cName} href= {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}    
                </ul>
                <div className="btn-icon">
                    <Button><i class="fas fa-user"></i></Button>
                    <Button><i class="fas fa-shopping-cart"></i></Button>
                </div>
            </nav>
        )
    }
}

export default Navbar