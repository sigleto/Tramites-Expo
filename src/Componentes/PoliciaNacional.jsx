import React from "react";
import { Link } from "react-router-dom";
import './Estilos/EstiloOrganismos.css'

const PoliciaNacional = () => {

    return (
        <div className="container">
            <img src='policia.jpg'/>
        <h2 className="tituloO">Servicios de la Policia Nacional</h2>
            <ul className="servicios-list">
            <li className="lista">
            <Link to='/AvisoPolicia'>Cita previa para renovación de DNI</Link>
            
            </li>
            <li className="lista">
            <a href='https://denuncias.policia.es/OVD/' target='_blank'>Denuncias</a>
            </li>
            <li className="lista" >
            
            <a href='https://www.policia.es/_es/extranjeria_portada.php' target='_blank'>Extranjería</a>
            </li>
            </ul>
        </div>
    )
}
export default PoliciaNacional