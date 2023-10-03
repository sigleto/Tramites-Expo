import React from "react";
import Nav from "../Nav";
import './Estilos/EstiloPresentacion.css'
import Rutas from "../Routes/Routes";
const Presentacion=()=>{
    return(
        <>
        
        <div className="container">
            <p className="parrafo">Para todos los trámites que se ofrecen en esta aplicación, no es necesario tener instalado el certificado electrónico en tu dispositivo. 
            No obstante, en algunos casos, sí que es necesario estar dado de alta en cl@ve movil (puedes solicitar el alta en cl@ve en este <a href="https://sede.agenciatributaria.gob.es/Sede/clave.html" target='_blank'>enlace</a>). 
            En todo caso, antes de entrar en cada trámite te ofrecemos la información de los datos y/o requisitos que pudieras necesitar para su realización</p>
        </div>
       
        </>
    )
    }
export default Presentacion