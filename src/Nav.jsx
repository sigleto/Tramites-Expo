import { NavLink } from "react-router-dom";
import './Componentes/Estilos/EstiloNavegador.css'
const Nav=()=>{

    return(
        <nav className="navegador">
            <NavLink className="nav" to="/"><span className="titulin">PAGINA PRINCIPAL</span></NavLink>
            <NavLink className="nav" to="/Organismos"><span className="titulin">ORGANISMOS</span></NavLink>
            <NavLink className="nav" to="/Ayuntamientos"><span className="titulin" >AYUNTAMIENTOS</span></NavLink>
            <NavLink className="nav" to="/Contacto"><span className="titulin" >CONTACTOS</span></NavLink>
        </nav>
    )
}
export default Nav