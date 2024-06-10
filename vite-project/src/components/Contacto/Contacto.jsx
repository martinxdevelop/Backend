import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Contacto.css";

function Contacto({ contacto, handleEliminar, handleEditar }) {
  console.log(contacto._id);
  return (
    <div className="container-card">
      <div className="header">
        <FaTimes className="icon" onClick={() => handleEliminar(contacto.id)} />
      </div>
      <div className="body">
        <div className="imagen">Imagen</div>
        <div className="datos">
          <span>{contacto.nombre}</span>
          <p>{contacto.telefono}</p>
          <p>{contacto.mail}</p>
        </div>

        <div className="container-boton">
          <div className="boton2" onClick={() => handleEliminar(contacto._id)}>
            <button>Eliminar</button>
          </div>

          <div className="boton3" onClick={() => handleEditar(contacto.id)}>
            <button>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
