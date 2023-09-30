import React from "react";
import './Estilos/EstiloOrganismos.css'
const Catastro = () => {

    return (
        < div className="container">
            <img src='catastro.png'/>
            <h2 className="tituloO">Servicios del Catastro</h2>
            <ul className="servicios-list">
                <li className="lista" >
                <a href='https://www1.sedecatastro.gob.es/Cartografia/mapa.aspx?buscar=S' target='_blank'>Buscar un inmueble por su referencia catastral</a>
                </li>
                <li className="lista">
                <a href='https://www.sedecatastro.gob.es/Accesos/SECAccTramites.aspx' target='_blank'>Trámites diversos</a>
                </li>

            </ul>

           


           
        </div>
    )
}
export default Catastro