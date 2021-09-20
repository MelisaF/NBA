import React from "react";
import './App.css';
import {NavBar} from "./components/Navbar/Navbar";
import {ItemListContainer} from './components/ListItem/ItemListContainer';

const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer/> 

        </div>
    )
}

export default App;