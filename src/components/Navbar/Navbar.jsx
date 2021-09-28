import {Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import './Navbar.css';
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
        return(
            <div>
                <div>
                    <p className="text-envio">ENVIO GRATIS A PARTIR DE $5000</p>
                </div>
                <div>
                    <Navbar className="navbar-container" expand="lg">
                        <Container className="navbar-container">
                            <NavLink className="navbar-title" to="/">Classic NBA</NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="list-item">
                                <NavLink className="list-item" to="/atlanta">ATLANTA</NavLink>
                                <NavLink className="list-item" to="/celtics">CELTICS</NavLink>
                                <NavLink className="list-item" to="/chicago">CHICAGO</NavLink>
                            </Nav>
                            <CartWidget/>
                        </Container>
                    </Navbar>   
                </div>
            </div>
        )
}
