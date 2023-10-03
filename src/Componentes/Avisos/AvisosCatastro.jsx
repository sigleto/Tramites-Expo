import React from "react";
import { Link } from "react-router-dom";
export const AvisoCatastro = () => {
  return (

    <div className="aviso">
      <p className="texto">¡ ATENCIÓN!: Para este trámite vas a necesitar un dato adicional de tu DNI, en concreto el Número de soporte/IDEXP, que está compuesto normalmente por una serie de tres letras y siete números.
      Lo encontrarás en la parte delantera del DNI (donde está la foto).También te pediran adicionalmente un número de referencia catastral de algún inmueble del que seas titular</p>
      <Link className="aviso-link" to='/AEAT'>Volver</Link>
      <a className="aviso-link" href='https://www.sedecatastro.gob.es/Accesos/SECAccDNI.aspx?Dest=1' target='_blank'>Ir a trámite</a>
    </div>
  )
}
