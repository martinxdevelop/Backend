import React from "react";
import "./Contactos.css";
import Contacto from "../Contacto/Contacto";

function Contactos({contactos, handleEliminar, handleEditar }) {
  return (
    <div className="contenedor-contactos">
      {contactos.length > 0 ? (
        contactos.map((contacto) => (
          <Contacto
            key={contacto._id}
            contacto={contacto}
            handleEliminar={handleEliminar}
            handleEditar={handleEditar}
          />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Contactos;
