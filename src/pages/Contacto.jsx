import React from "react";
import Alertas from "../components/Alertas";
import "../assets/styles.css";

const Contacto = () =>{
    return(
        <div className="contain">
            <h1>Formulario de contacto</h1>
            <p>Deja tus datos y te contactamos</p>
            <Alertas />
        </div>
    );
}

export default Contacto;