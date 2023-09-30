import React from "react";
import { Link } from "react-router-dom";
export const AvisoAEAT1 = () => {
  return (

    <div className="aviso">
      <p className="texto">¡ ATENCIÓN!: Para este trámite deberás estar dado de alta en Cl@ve Móvil.Ten a mano tu DNI;la Agencia tributaria te pedirá el número de tu DNI y la fecha de caducidad del mismo ( o de expedición en caso de que el DNI sea permanente).A continuación saldrá una pantalla avisando de que te envían un PIN a tu teléfono. En cuanto lo ingreses, ya  podrás realizar el trámite </p>
      <Link className="aviso-link" to='/AEAT'>Volver</Link>
      <a className="aviso-link" href='https://www2.agenciatributaria.gob.es/wlpl/BUCV-JDIT/AutenticaDniNieContrasteh?ref=%2Fwlpl%2FOVCT-CXEW%2FSelectorAcceso%3Fref%3D%252Fwlpl%252FREGD-JDIT%252FFG%253FfTramite%253DGZ785%26aut%3DCP' target='_blank'>Ir a trámite</a>
    </div>
  )
}
export const AvisoAEAT2 = () => {
  return (
    <div className="aviso">
      <p className="texto"> ¡ ATENCIÓN!: Para este trámite deberás estar dado de alta en Cl@ve Móvil.Ten a mano tu DNI;la Agencia tributaria te pedirá el número de tu DNI y la fecha de caducidad del mismo ( o de expedición en caso de que el DNI sea permanente).A continuación saldrá una pantalla avisando de que te envían un PIN a tu teléfono. En cuanto lo ingreses, ya  podrás realizar el trámite</p>
      <Link className="aviso-link" to='/AEAT'>Volver</Link>
      <a className="aviso-link" href='https://www6.agenciatributaria.gob.es/wlpl/SRVO-JDIT/ConsultaDdas?faccion=CONS_DDAS' target='_blank' >Ir a trámite</a>
    </div>
  )
}
export const AvisoAEAT3 = () => {
  return (
    <div className="aviso">
      <p className="texto"> ¡ ATENCIÓN!: Para este trámite deberás estar dado de alta en Cl@ve Móvil.Ten a mano tu DNI;la Agencia tributaria te pedirá el número de tu DNI y la fecha de caducidad del mismo ( o de expedición en caso de que el DNI sea permanente).A continuación saldrá una pantalla avisando de que te envían un PIN a tu teléfono. En cuanto lo ingreses, ya  podrás realizar el trámite</p>
      <Link className="aviso-link" to='/AEAT'>Volver</Link>
      <a className="aviso-link" href='https://www2.agenciatributaria.gob.es/wlpl/BUCV-JDIT/AutenticaDniNieContrasteh?ref=%2Fwlpl%2FOVCT-CXEW%2FSelectorAcceso%3Fref%3D%252Fwlpl%252FSCEJ-MANT%252FSvqueryEDOV%253FMODELO%253D100%2526EJERCICIO%253D-1%26aut%3DCPR' target='_blank' >Ir a trámite</a>
    </div>
  )
}
export const AvisoAEAT4 = () => {
  return (
    <div className="aviso">
      <p className="texto"> ¡ ATENCIÓN!: Para este trámite deberás de facilitar el código CSV que figura en el documento que te ha enviado la AEAT. Lo podrás encontrar en la parte inferior del mismo (abajo del todo)</p>    
      <Link className="aviso-link" to='/AEAT'>Volver</Link>
      <a className="aviso-link" href='https://www2.agenciatributaria.gob.es/wlpl/REGD-JDIT/FGCSV' target='_blank'>Ir a trámite</a>
    </div>
  )
}

