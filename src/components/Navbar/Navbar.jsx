import {Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import './Navbar.css';

export const NavBar = () => {
        return(
            <div>
                <div>
                    <p className="text-envio">ENVIO GRATIS A PARTIR DE $5000</p>
                </div>
                <div>
                    <Navbar className="navbar-container" expand="lg">
                        <Container className="navbar-container">
                            <Navbar.Brand className="navbar-title" href="#home">Classic NBA</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="list-item">
                                <Nav.Link className="list-item" href="#home">Inicio</Nav.Link>
                                <Nav.Link className="list-item" href="#link">Productos</Nav.Link>
                                <Nav.Link className="list-item" href="#link">Contacto</Nav.Link>
                                <Nav.Link className="list-item" href="#link">Ayuda</Nav.Link>
                            </Nav>
                            <CartWidget/>
                        </Container>
                    </Navbar>
                    
                </div>
            </div>
        )
}
