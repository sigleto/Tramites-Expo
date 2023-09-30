import React from "react";
import { Link } from "react-router-dom";
import './Estilos/EstiloOrganismos.css'
const AEAT = () => {
    return (
        <div className="container">
            <img src='AEAT.jpg'/>
            <h2 className="tituloO">Servicios de la AEAT</h2>
            <ul className="servicios-list" >
                <li className="lista"><Link to='/AvisoAEAT4'>Contestación a una comunicación de la Agencia</Link></li>
                
                <li className="lista"><Link to='/AvisoAEAT1'>Presentación de escrito sin comunicación previa</Link></li>
                   
                <li className="lista"><a
                    href='https://www2.agenciatributaria.gob.es/wlpl/TOCP-MUTE/internet/identificacion'
                    target='_blank' >Petición de cita previa</a></li>
                <li className="lista"><Link to='/AvisoAEAT2'>Consulta de deudas</Link> </li>
                <li className="lista" ><Link to='/AvisoAEAT3'>Consulta de la declaración de IRPF</Link></li>
                <li className="lista"><a
                    href='https://sede.agenciatributaria.gob.es/Sede/inicio.html'
                    target='_blank'
                    >Otro tipo de consultas</a></li>


            </ul>


        </div>
    );
};

export default AEAT;
