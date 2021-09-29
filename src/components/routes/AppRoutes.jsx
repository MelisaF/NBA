import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ProductosAtlanta } from "../ProductosAtlanta/ProductosAtlanta";
import { ProductosCeltics } from "../ProductosCeltics/ProductosCeltics";
import { ProductosChicago } from "../ProductosChicago/ProductosChicago";
import {ProductoDetail} from "../ProductoDetail/ProductoDetail";
import { PaginaInicio } from "../PaginaInicio/PaginaInicio";
import {NavBar} from "../Navbar/NavBar";
import {Contacto} from "../Formulario/Contacto";

export const AppRoutes = ({onAdd}) => {

    return (
        <div>
            <Router>
                <NavBar onAdd={onAdd}/>
                <Switch>
                    <Route path="/" exact component={PaginaInicio}/>
                    <Route path="/atlanta" exact component={ProductosAtlanta}/>
                    <Route path="/celtics" exact component={ProductosCeltics}/>
                    <Route path="/chicago" exact component={ProductosChicago}/>
                    <Route path="/producto/:id" exact component= {ProductoDetail}/>
                    <Route path="/contacto" exact component= {Contacto}/>
                </Switch>
            </Router>
        </div>
    )
}