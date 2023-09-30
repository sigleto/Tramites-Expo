import React, { useState } from "react";

const Ayuntamientos = () => {
  const [comunidad, setComunidad] = useState("");
  const [concejo, setConcejo] = useState("");

  const elige = () => {
    let url;

    if (comunidad === "CATALUÑA") {
      url = `https://www.${concejo}.cat`;
    } else if (comunidad === "GALICIA") {
      url = `https://www.${concejo}.gal`;
    } else if (comunidad === "EUSKADI") {
      url = `https://www.${concejo}.eus`;
    } 
     else {
      url = `https://www.${concejo}.es`;
    }

    window.open(url, '_blank');
  };

  return (
    <>
      <div>
        <p>Selecciona Comunidad Autónoma</p>
        <select value={comunidad} onChange={(e) => setComunidad(e.target.value)}>
          <option value="">Selecciona una Comunidad</option>
          <option value="GALICIA">Galicia</option>
          <option value="CATALUÑA">Cataluña</option>
          <option value="EUSKADI">Euskadi</option>
          <option value="OTRA">Otra</option>
        </select>
        <p>Selecciona Ayuntamiento</p>
        <input value={concejo} onChange={(e) => setConcejo(e.target.value)} />
        <button onClick={elige}>ACCEDER</button>
      </div>
    </>
  );
};

export default Ayuntamientos;
