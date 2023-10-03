import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Contacto = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Obtener la función navigate
  
  const accion = async (datos) => {
    try {
      await fetch("https://tramites-expo-m2x2.vercel.app/Contacto", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(datos),
        headers: { "Content-Type": "application/json" }
      });
      console.log("Datos enviados correctamente");
      reset();
      navigate('/')
    } catch (error) {
      console.log("Error al enviar los datos:", error);
    } 
  
  };

  return (
    <>
    <div className="contForm">
    
      <form className="formulario"onSubmit={handleSubmit(accion)}>
        <div className="campos">
          <label htmlFor="Alias"><p>Alias</p></label>
          <input id="Alias" placeholder="Introduce tu alias" {...register("alias", { required: true })} />
        </div>
       
        <div className="campos">
          <label htmlFor="email"><p>E-Mail</p></label>
          <input className="inputc" id="email" placeholder="Sólo si quieres que te contestemos" {...register("correo", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ })} />
        </div>
        
        <div className="campos comentarios">
          <label htmlFor="comentarios"><p>COMENTARIOS</p></label>
          <textarea className="comentarios" placeholder="Puedes informarnos de algún trámite u organismo que deseas que incluyamos,correción o sugerencia" {...register("comentarios")} />
        </div>
        <input className="enviando"type="submit" value="ENVIAR DATOS" />
        
        {errors.correo?.type === "pattern" && <div><p>Eso no es un correo válido</p></div>}
        
      </form>
      <img src="contacto.jpg" className="gatito" alt="contacto"/>
      
      </div>
    
    </>
  );
};

export default Contacto;
