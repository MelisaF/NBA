import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ProductosAtlanta } from "../ProductosAtlanta/ProductosAtlanta";
import { ProductosCeltics } from "../ProductosCeltics/ProductosCeltics";
import { ProductosChicago } from "../ProductosChicago/ProductosChicago";
import {ProductoDetail} from "../ProductoDetail/ProductoDetail";
import {NavBar} from "../Navbar/NavBar";

export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/atlanta" exact component={ProductosAtlanta}/>
                    <Route path="/celtics" exact component={ProductosCeltics}/>
                    <Route path="/chicago" exact component={ProductosChicago}/>
                    <Route path="/producto/:id" exact component= {ProductoDetail}/>
                </Switch>
            </Router>
        </div>
    )
}