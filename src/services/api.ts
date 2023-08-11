import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8088', // Coloque a URL correta do seu backend
});

export const fetchDoctors = async () => {
  const response = await api.get('/doctors');
  return response.data;
};

export const createDoctor = async (doctorData) => {
  const response = await api.post('/doctors', doctorData);
  return response.data;
};

// Outras funções para atualizar e excluir médicos