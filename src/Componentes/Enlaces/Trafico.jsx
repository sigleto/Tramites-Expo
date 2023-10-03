import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/EstiloOrganismos.css'
const Trafico = () => {

    return (
        <div className="container">
            <img src='trafico.png'/>
            <h2 className="tituloO">Servicios de la Dirección General de Tráfico</h2>
            <ul className="servicios-list">
                <li className="lista">
                    <Link to='/AvisosTrafico1'>Pago de multas</Link>
                </li>

                <li className="lista">
                    <a href='https://sedeclave.dgt.gob.es/WEB_NCIT_CONSULTA/solicitarCita.faces' target='_blank'>Cita renovación permiso de conducir</a>
                </li>
                               
                <li className="lista">
                <Link to='/AvisosTrafico2'>Cita previa para pasar la ITV</Link>
                </li>
                <li className="lista">
                <Link to='/AvisosTrafico3'>Cambio en la titularidad de un vehículo</Link>
                </li>
                <li className="lista">
                <Link to='/AvisosTrafico4'>Informe detallado de un vehículo</Link>
                </li>
                <li className="lista">
                <Link to='/AvisosTrafico5'>Consulta de puntos del carnet de conducir</Link>
                </li>
                
            </ul>
        </div>
    )
}
export default Trafico