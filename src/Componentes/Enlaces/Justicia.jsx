import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/EstiloOrganismos.css'

const Justicia=()=>{

    return(
        < div className="container">
            <img src='justicia.png'/>
            <h2 className="tituloO">Servicios de Justicia</h2>
        <ul className="servicios-list">
            <li className="lista" >
                <a href='https://sede.mjusticia.gob.es/sereci/initDatosGenerales?idMateria=NAC&idtramite=102&lang=es_es&idpagina=1215197884559'>CERTIFICADO DE NACIMIENTO</a>
            </li>
            <li className="lista">
                <a href='https://sede.mjusticia.gob.es/sereci/initDatosGenerales?idMateria=DEF&idtramite=105&lang=es_es&idpagina=1215197884559'>CERTIFICADO DE DEFUNCIÓN</a>
            </li>
            <li className="lista">
                <a href="https://sede.mjusticia.gob.es/certur/ConsultaEstadoSolicitud?lang=es_es&idpagina=1215197884559&idtramite=1288778398757">CERTIFICADO DE ACTOS DE ÚLTIMA VOLUNTAD</a>
            </li>
            <li className="lista">
                <a href='https://sede.mjusticia.gob.es/sereci/initDatosGenerales?idMateria=MAT&idtramite=101&lang=es_es&idpagina=1215197884559'>CERTIFICADO DE MATRIMONIO</a>
            </li>
            <li className="lista">
                <Link to='/AvisoJusticia'>CITA PREVIA PARA REGISTRO CIVIL</Link>
            </li>
        </ul>
        
 
        </div>
    )
}
export default Justicia