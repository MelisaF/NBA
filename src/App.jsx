import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {ItemListContainer} from './components/ListItem/ItemListContainer';

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <ItemListContainer/> 

        </div>
    )
}

export default App;