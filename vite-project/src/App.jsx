import React, { useState, useEffect } from "react";
import FiltroNav from "./components/FiltroNav/FiltroNav";
import Formulario from "./components/Formulario/Formulario";
import "./index.css";
import "./App.css";
import Contactos from "./components/Contactos/Contactos";
import { deleteAgendas, getContactos, saveAgendas } from "./libs/client";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactos, setContactos] = useState([]);
  const [filteredContactos, setFilteredContactos] = useState([]);
  const [contactoActual, setContactoActual] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setContactoActual(null);
    }
  };
  console.log("contactos", contactos);
  const agregarContacto = async (nuevoContacto) => {
    const crearContactoRespuesta = await fetchCrearContacto(nuevoContacto);
    setContactos([...contactos, crearContactoRespuesta]);
    toggleModal();
  };

  const eliminarContacto = async (id) => {
    console.log(id, "este es el id");
    await fetchBorrarContacto(id);
    await fetchContactos();
  };

  const handleSearch = (searchTerm) => {
    const filtered = contactos.filter((contacto) =>
      contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContactos(filtered);
  };

  const editarContacto = (id) => {
    const contacto = contactos.find((contacto) => contacto.id === id);
    setContactoActual(contacto);
    if (!isModalOpen) {
      toggleModal();
    }
  };
  async function fetchContactos() {
    const respuestaDeContactos = await getContactos();

    setContactos(respuestaDeContactos);
  }

  async function fetchCrearContacto(contacto) {
    const respuestaDeContactos = await saveAgendas(contacto);

    return respuestaDeContactos;
    //setContactos(respuestaDeContactos);
  }

  async function fetchBorrarContacto(id) {
    const respuestaDeContactos = await deleteAgendas(id);

    return respuestaDeContactos;
    //setContactos(respuestaDeContactos);
  }

  

  useEffect(() => {
    fetchContactos();
  }, []);
  return (
    <>
      <FiltroNav handleModal={toggleModal} handleSearch={handleSearch} />
      {isModalOpen && (
        <Formulario
          handleModal={toggleModal}
          handlesubmit={agregarContacto}
          contactoActual={contactoActual}
        />
      )}
      <Contactos
        contactos={contactos}
        handleEliminar={eliminarContacto}
        handleEditar={editarContacto}
      />
    </>
  );
};

export { App };
