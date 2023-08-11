import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup'; // Importe o yupResolver
import * as yup from 'yup';
import { createDoctor } from '../services/api';

const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    crm: yup.string().required('Campo obrigatório'),
    // Outras validações...
});

const DoctorForm = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: any) => {
        try {
            await createDoctor(data);
            reset(); // Limpar o formulário após o cadastro
        } catch (error) {
            console.error('Erro ao cadastrar médico:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="Nome" {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
            <TextField label="CRM" {...register('crm')} error={!!errors.crm} helperText={errors.crm?.message} />
            {/* Outros campos */}
            <Button type="submit">Cadastrar</Button>
        </form>
    );
};

export default DoctorForm;