import React from "react";
import { Link } from "react-router-dom";
export const AvisoSegSocial1 = () => {
  return (

    <div className="aviso">
      <p className="texto">¡ ATENCIÓN!: Para este trámite necesitas estar dado de alta en cl@ve móvil</p>   <Link className="aviso-link" to='/AEAT'>Volver</Link>
      <a className="aviso-link" href='https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Altas%2C+bajas+y+modificaciones/Altas+y+afiliacion+de+trabajadores/Solicitar+el+numero+de+la+Seguridad+Social' target='_blank'>Ir a trámite</a>
    </div>
  )
}
export const AvisoSegSocial2 = () => {
  return (

    <div className="aviso">
      <p className="texto">¡ ATENCIÓN!: Para este trámite te pedirán entre otras cosas un correo y foto del DNI (la podrás hacer durante el mismo trámite)</p>   
      <Link className="aviso-link" to='/AEAT'>Volver</Link>
      <a className="aviso-link" href='https://identificacion.seg-social.es/?origen=inss&representante=true&destino=https%3A%2F%2Ftramites.seg-social.es%2Fpension-jubilacion%2Fpension-jubilacion-nacional' target='_blank'>Ir a trámite</a>
    </div>
  )
}
