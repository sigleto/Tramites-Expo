import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/EstiloOrganismos.css'
const SegSocial = () => {
    return (
        <div className="container">
            <img src='SeguridadSocial.jpg'/>
            <h2 className="tituloO">Servicios de la Seguridad Social</h2>
            <ul className="servicios-list" >
                
                <li className="lista"><a
                    href='https://imv.seg-social.es/'
                    target='_blank' >Solicitud Ingreso mínimo vital</a></li>
                <li className="lista"><a
                    href='https://tramites.seg-social.es/tramites/asistencia.html'
                    target='_blank' >Solicitud Asistencia Sanitaria</a></li>
                <li className="lista"><a
                    href='https://identificacion.seg-social.es/?origen=inss&representante=true&destino=https%3A%2F%2Ftramites.seg-social.es%2Fnacimiento-menor%2Fprestacion-nacimiento-cuidado-menor'
                    target='_blank' >Solicitud Prestaciones Familiares (nacimiento,parto,adopcion...)</a></li>
                <li className="lista"><a
                    href='https://pssc.seg-social.es/prestacion-incapacidad-temporal-inss'
                    target='_blank' >Solicitud Prestacion Incapacidad Temporal</a></li>
                

            </ul>


        </div>
    );
};

export default SegSocial;
