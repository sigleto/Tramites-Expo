import React from "react";
import { Link } from "react-router-dom";
export const AvisosTrafico1=()=>{
    return(
      <div className="aviso">
      <p className="texto"> ¡ ATENCIÓN!: Entre otros datos te van a pedir el nº de expediente, que se encuentra en la parte superior del aviso de la multa. No obstante, si la has recibido por correo, el número de expediente se encontrará en la carta de notificación, que te habrán enviado junto con el aviso de la multa.</p>
      <Link className="aviso-link" to='/Trafico'>Volver</Link>
      <a className="aviso-link "href='https://sedeclave.dgt.gob.es/WEB_IWPS5_INET/jsp/sincertificado/index.jspx' target='_blank'>Ir a trámite</a>
      </div>
      )
    }
export const AvisosTrafico2=()=>{
    return(
      <div className="aviso">
      <p className="texto" > ¡ ATENCIÓN!: Además de la matrícula, te van a pedir también un dato más del vehículo, que puede ser el nº de bastidor (lo encontrarás tanto en el permiso de circulación como en la ficha técnica, apartado E) o la fecha de matriculación, que encontrarás en el permiso de circulación.</p>
      <Link className="aviso-link" to='/Trafico'>Volver</Link>
      <a className="aviso-link" href='https://www.itvcita.com/Welcome.do;jsessionid=m2aaDJRF8WgTKnqJYTGXB3uo6EuyGqN-KO3KUMh3.master:nodo-citas1' target='_blank'>Ir a trámite</a>
      </div>
      )
}
export const AvisosTrafico3=()=>{
    return(
      <div className="aviso">
      <p className="texto" > ¡ ATENCIÓN!: Para este trámite deberás estar dado de alta en Cl@ve Móvil.</p>
      <Link className="aviso-link" to='/Trafico'>Volver</Link>
      <a className="aviso-link" href='https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/cambio-titularidad-vehiculo/index.shtml' target='_blank'>Ir a trámite</a>
      </div>
      )
}
export const AvisosTrafico4=()=>{
    return(
      <div className="aviso">
      <p className="texto" > ¡ ATENCIÓN!: Para este trámite deberás estar dado de alta en Cl@ve Móvil.</p>
      <Link className="aviso-link" to='/Trafico'>Volver</Link>
      <a className="aviso-link" href='https://sedeclave.dgt.gob.es/WEB_INTV_INTER/xhtml/acciones/iniciarSolicitudInforme.jsf' target='_blank'>Ir a trámite</a>
      </div>
      )
}
export const AvisosTrafico5=()=>{
    return(
      <div className="aviso">
      <p className="texto" > ¡ ATENCIÓN!: Para este trámite deberás estar dado de alta en Cl@ve Móvil.</p>
      <Link className="aviso-link" to='/Trafico'>Volver</Link>
      <a className="aviso-link" href='https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-tus-puntos/' target='_blank'>Ir a trámite</a>
      </div>
      )
}