import { Route,Routes } from "react-router-dom";
import AEAT from "../Componentes/Enlaces/AEAT";
import Home from "../Componentes/Home";
import Catastro from "../Componentes/Enlaces/Catastro";
import Justicia from "../Componentes/Enlaces/Justicia";
import SegSocial from "../Componentes/Enlaces/SeguridadSocial";
import PoliciaNacional from "../Componentes/Enlaces/PoliciaNacional";
import Trafico from "../Componentes/Enlaces/Trafico";
import Presentacion from "../Componentes/Presentacion";
import Organismos from "../Componentes/Organismos";
import {AvisoAEAT1,AvisoAEAT2,AvisoAEAT3,AvisoAEAT4,AvisoAEAT5,AvisoAEAT6} from "../Componentes/Avisos/AvisosAEAT";
import { AvisoPolicia } from "../Componentes/Avisos/AvisosPolicia";
import { AvisoSegSocial1,AvisoSegSocial2 } from "../Componentes/Avisos/AvisosSegSocial";
import { AvisoJusticia } from "../Componentes/Avisos/AvisosJusticia";
import { AvisoCatastro } from "../Componentes/Avisos/AvisosCatastro";
import { AvisosTrafico1,AvisosTrafico2,AvisosTrafico3,AvisosTrafico4,AvisosTrafico5 } from "../Componentes/Avisos/AvisosTrafico";
import Contacto from "../Componentes/Contacto";

const Rutas=()=>{

    return(

        <Routes>
             <Route path="/" element={<Home/>}/>
            <Route path="/Organismos" element={<Organismos/>}/>
            <Route path="/Presentacion" element={<Presentacion/>}/>
            <Route path="/AEAT" element={<AEAT/>}/>
            <Route path="/Justicia" element={<Justicia/>}/>
            <Route path="/PoliciaNacional" element={<PoliciaNacional/>}/>
            <Route path="/Trafico" element={<Trafico/>}/>
            
            <Route path="/Catastro" element={<Catastro/>}/>
            <Route path="/SegSocial" element={<SegSocial/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
            <Route path="/AvisoAEAT1" element={<AvisoAEAT1/>}/>
            <Route path="/AvisoAEAT2" element={<AvisoAEAT2/>}/>
            <Route path="/AvisoAEAT3" element={<AvisoAEAT3/>}/>
            <Route path="/AvisoAEAT4" element={<AvisoAEAT4/>}/>
            <Route path="/AvisoAEAT5" element={<AvisoAEAT5/>}/>
            <Route path="/AvisoAEAT6" element={<AvisoAEAT6/>}/>
            <Route path="/AvisoPolicia" element={<AvisoPolicia/>}/>
            <Route path="/AvisoJusticia" element={<AvisoJusticia/>}/>
            <Route path="/AvisosTrafico1" element={<AvisosTrafico1/>}/>
            <Route path="/AvisosTrafico2" element={<AvisosTrafico2/>}/>
            <Route path="/AvisosTrafico3" element={<AvisosTrafico3/>}/>
            <Route path="/AvisosTrafico4" element={<AvisosTrafico4/>}/>
            <Route path="/AvisosTrafico5" element={<AvisosTrafico5/>}/>
            <Route path="/AvisoCatastro" element={<AvisoCatastro/>}/>
            <Route path="/AvisoSegSocial1" element={<AvisoSegSocial1/>}/>
            <Route path="/AvisoSegSocial2" element={<AvisoSegSocial2/>}/>
        </Routes>
    )
}
export default Rutas