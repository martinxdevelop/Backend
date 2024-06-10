import React from 'react';
import { FaAddressBook } from "react-icons/fa";
import './FiltroNav.css';

function FiltroNav({ handleModal, handleSearch, searchTerm }) {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="containerNavegacion">
      <div className="logo">
        <span>Agenda de Contactos</span>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Buscar contacto"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <div className="boton">
        <button onClick={handleModal}>
          <FaAddressBook className="icon" />
        </button>
      </div>
    </div>
  );
}

export default FiltroNav;

