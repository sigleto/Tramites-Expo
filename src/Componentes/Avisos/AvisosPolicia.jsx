import React from "react";
import { Link } from "react-router-dom";
export const AvisoPolicia=()=>{
    return(
      <div className="aviso">
      <p className="texto"> ¡ ATENCIÓN!: Ten a mano tu DNI. Te pedirán una serie de datos incluidos en el mismo.</p>
      <Link className="aviso-link" to='/PoliciaNacional'>Volver</Link>
      <a className="aviso-link" href='https://www.citapreviadnie.es/citaPreviaDni/InicioDNINIE.action' target='_blank'>Ir a trámite</a>
      </div>
      )
}