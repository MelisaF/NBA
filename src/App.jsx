import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {ItemListContainer} from './components/ItemListContainer';

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <ItemListContainer shop="Próximamente estaremos cargando los productos"/> 
        </div>
    )
}

export default App;