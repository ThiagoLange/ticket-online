// src/components/organisms/ContactForm/ContactForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import styles from './ContactForm.module.css';

interface IFormInput {
  email: string;
  assunto: string;
  mensagem: string;
  urgencia?: boolean;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Dados do formulário:', data);
    alert(`E-mail: ${data.email}\nAssunto: ${data.assunto}\nMensagem: ${data.mensagem}\nUrgente: ${data.urgencia ? 'Sim' : 'Não'}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Entre em Contato</h2>
      <Input
        label="Seu E-mail:"
        type="email"
        {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^\S+@\S+$/i, message: "Formato de e-mail inválido"} })}
        error={errors.email?.message}
      />
      <Input
        label="Assunto:"
        type="text"
        {...register('assunto', { required: 'Assunto é obrigatório' })}
        error={errors.assunto?.message}
      />
      <Input
        label="Mensagem:"
        as="textarea"
        rows={5}
        {...register('mensagem', { required: 'Mensagem é obrigatória' })}
        error={errors.mensagem?.message}
      />
      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          id="urgencia"
          {...register('urgencia')}
          className={styles.checkbox}
        />
        <label htmlFor="urgencia" className={styles.checkboxLabel}>Marcar como urgente</label>
      </div>
      <Button type="submit" variant="primary">Enviar Mensagem</Button>
    </form>
  );
};

export default ContactForm;