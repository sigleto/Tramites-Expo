import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/EstiloOrganismos.css';

const AEAT = () => {
    return (
        <div className="container">
            <img src='AEAT.jpg'/>
            <h2 className="tituloO">Servicios de la AEAT</h2>
            
            {/* Sección para trámites que requieren Clave Móvil */}
            <div className="clave-movil-section">
                <h3>Trámites que requieren Cl@ve Móvil:</h3>
                <ul className="servicios-list">
                   
                    <li className="lista"><Link to='/AvisoAEAT2'>Consulta de deudas</Link></li>
                    <li className="lista"><Link to='/AvisoAEAT3'>Consulta de la declaración de IRPF</Link></li>
                    <li className="lista"><Link to='/AvisoAEAT5'>Gestión modelo 140 (Abono anticipado deducción por maternidad)</Link></li>
                    <li className="lista"><Link to='/AvisoAEAT6'>Gestión modelo 143 (Abono anticipado por deducción de famila numerosa/ascendientes con dos hijos/Personas con discapacidad a cargo)</Link></li>
                   
                    <li className="lista"><Link to='/AvisoAEAT1'>Presentación de escrito sin comunicación previa</Link></li>
                </ul>
            </div>

            {/* Sección para trámites que no requieren Cl@ve Móvil */}
            <div className="sin-clave-movil-section">
                <h3>Trámites que no requieren Cl@ve Móvil:</h3>
                <ul className="servicios-list">
                    <li className="lista"><Link to='/AvisoAEAT4'>Contestación a una comunicación de la Agencia</Link></li>
                    <li className="lista"><a
                        href='https://www2.agenciatributaria.gob.es/wlpl/TOCP-MUTE/internet/identificacion'
                        target='_blank'
                        >Petición de cita previa</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AEAT;
