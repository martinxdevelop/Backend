import axios from "axios";

//const baseUrl = import.meta.env.VITE_BASE_URL;

const baseUrl = "http://localhost:3001/v1";

export async function getContactos() {
  try {
    const response = await axios.get(`${baseUrl}/agendas`);
    return response.data.agendas; // Ajuste para devolver los datos correctos
  } catch (e) {
    console.log(e);
  }
}

export async function saveAgendas(agendaData) {
  try {
    const response = await axios.post(`${baseUrl}/agendas`, agendaData);
    return response.data.agenda; // Ajuste para devolver los datos correctos
  } catch (e) {
    console.log(e);
  }
}

export async function updateAgendas(_id, datosNuevos) {
  try {
    const response = await axios.put(`${baseUrl}/agendas/${_id}`, datosNuevos);
    return response.data.agenda; // Ajuste para devolver los datos correctos
  } catch (e) {
    console.log(e);
  }
}

export async function deleteAgendas(id) {
  try {
    const response = await axios.delete(`${baseUrl}/agendas/${id}`);
    return response.data; // Ajuste para devolver los datos correctos
  } catch (e) {
    console.log(e);
  }
}
