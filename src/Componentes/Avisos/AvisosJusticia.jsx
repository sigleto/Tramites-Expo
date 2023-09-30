import React from "react";
import { Link } from "react-router-dom";
export const AvisoJusticia=()=>{
    return(
      <div className="aviso">
      <p className="texto"> ¡ ATENCIÓN!: Inicialmente te pedirán que eligas Provincia, Registro concreto para el que quieres la cita y el tipo de trámite a realizar</p>
      <Link className="aviso-link" to='/Justicia'>Volver</Link>
      <a className="aviso-link" href='https://sede.administracionespublicas.gob.es/icpplustiej/citar?org=JUS-RC&locale=es' target='_blank'>Ir a trámite</a>
      </div>
      )
}