import { useEffect, useState } from 'react';
import { fetchDoctors } from '../services/api';

interface Doctor {
  id: number; // Suponhamos que o objeto de médico tenha uma propriedade 'id' do tipo number
  name: string;
  crm: string;
  // Outras propriedades
}

const DoctorGrid = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const loadDoctors = async () => {
    try {
      const data = await fetchDoctors();
      setDoctors(data);
    } catch (error) {
      console.error('Erro ao carregar médicos:', error);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CRM</th>
            {/* Outras colunas */}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.crm}</td>
              {/* Outras células */}
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorGrid;