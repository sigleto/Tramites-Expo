import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="presentacion">
      <img src='LogoJuan.png'/><br/>
      <img src='burocracia.png'/>
      <h1 className="titulo">Bienvenido a Trámite Express</h1>
      <p className="descripcion">
        Simplificamos el acceso en línea a trámites públicos comunes. Además,
        ofrecemos breves notas informativas sobre los requisitos necesarios para
        cada trámite específico. ¡Facilitamos tu camino hacia la burocracia!
      </p>
      <Link to="/Organismos" className="boton-comenzar">
        Comenzar
      </Link>
    </div>
  );
};

export default Home;
