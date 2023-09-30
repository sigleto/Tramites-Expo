import React from "react";
import { Link } from "react-router-dom";


const Organismos = () => {
  return (
    <div className="organismos-container">
      <h3 className="tituloOrg">¿En qué organismo deseas ingresar?</h3>
      <div className="organismos">
        <Link className="opcion" to="/AEAT" target="_blank">
          AEAT
        </Link>
        <Link className="opcion" to="/PoliciaNacional" target="_blank">
          Policía Nacional
        </Link>
        <Link className="opcion" to="/Trafico" target="_blank">
          Tráfico
        </Link>
        <Link className="opcion" to="/Justicia" target="_blank">
          Justicia
        </Link>
        <Link className="opcion" to="/Catastro" target="_blank">
          Catastro
        </Link>
      </div>
    </div>
  );
};

export default Organismos;
