import "../estilos.css";

export const Contacto = () => {

    const handleSelect = (e) => {
        console.log(e.target.value);
    }
    const handleButton = (e) => {
        e.preventDefault();
        console.log("enviar formulario")
    }
    return (
        <div>
            <h1 className="title-contact">CONTACTO</h1>
            <form className="container-form">
                <label>Nombre y apellido:  </label>
                <input type="text" name="name"></input>
                <label>Email: </label>
                <input type="text" name="email"></input><br/>
                <textarea>Escribe tu comentario</textarea><br/>
                <h5>Quiero recibir notificaciones</h5>
                <select onChange={handleSelect}>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select><br/>
                <button className="btn btn-dark btn-enviar" onClick= {handleButton}>Enviar</button>
            </form>
        </div>
    )
}