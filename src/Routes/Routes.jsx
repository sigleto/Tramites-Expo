import { Route,Routes } from "react-router-dom";
import AEAT from "../Componentes/AEAT";
import Home from "../Componentes/Home";
import Catastro from "../Componentes/Catastro";
import Justicia from "../Componentes/Justicia";
import PoliciaNacional from "../Componentes/PoliciaNacional";
import Trafico from "../Componentes/Trafico";
import Ayuntamientos from "../Componentes/Ayuntamientos";
import Organismos from "../Componentes/Organismos";
import {AvisoAEAT1,AvisoAEAT2,AvisoAEAT3,AvisoAEAT4} from "../Componentes/Avisos/AvisosAEAT";
import { AvisoPolicia } from "../Componentes/Avisos/AvisosPolicia";
import { AvisoJusticia } from "../Componentes/Avisos/AvisosJusticia";
import { AvisosTrafico1,AvisosTrafico2 } from "../Componentes/Avisos/AvisosTrafico";
import Contacto from "../Componentes/Contacto";

const Rutas=()=>{

    return(

        <Routes>
             <Route path="/" element={<Home/>}/>
            <Route path="/Organismos" element={<Organismos/>}/>
            <Route path="/AEAT" element={<AEAT/>}/>
            <Route path="/Justicia" element={<Justicia/>}/>
            <Route path="/PoliciaNacional" element={<PoliciaNacional/>}/>
            <Route path="/Trafico" element={<Trafico/>}/>
            <Route path="/Ayuntamientos" element={<Ayuntamientos/>}/>
            <Route path="/Catastro" element={<Catastro/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
            <Route path="/AvisoAEAT1" element={<AvisoAEAT1/>}/>
            <Route path="/AvisoAEAT2" element={<AvisoAEAT2/>}/>
            <Route path="/AvisoAEAT3" element={<AvisoAEAT3/>}/>
            <Route path="/AvisoAEAT4" element={<AvisoAEAT4/>}/>
            <Route path="/AvisoPolicia" element={<AvisoPolicia/>}/>
            <Route path="/AvisoJusticia" element={<AvisoJusticia/>}/>
            <Route path="/AvisosTrafico1" element={<AvisosTrafico1/>}/>
            <Route path="/AvisosTrafico2" element={<AvisosTrafico2/>}/>
        </Routes>
    )
}
export default Rutas