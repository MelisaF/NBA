import "../estilos.css";
import { Fragment, useState } from "react";

export const Contacto = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    const enviarDatos = (e) => {
        e.preventDefault ();
    }

    return (
        <Fragment>
            <div className="container mt-3">
                <h1>CONTACTO</h1>
                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese nombre" 
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange= {handleInputChange}>
                        </input>
                    </div>
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese apellido" 
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange= {handleInputChange}>
                        </input>
                    </div>
                    <div className="col-md-3">
                        <input
                        placeholder="Ingrese email" 
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={handleInputChange}>
                        </input>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-dark" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}