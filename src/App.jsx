import React from "react";
import './App.css';
import {NavBar} from "./components/Navbar/Navbar";
import {ItemListContainer} from './components/ListItem/ItemListContainer';
import {ItemDetailContainer} from './components/ListItem/ItemDetailContainer';

const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer/> 
            <ItemDetailContainer/>
        </div>
    )
}

export default App;