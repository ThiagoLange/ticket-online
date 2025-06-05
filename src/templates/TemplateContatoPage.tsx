// src/templates/TemplateContatoPage.tsx
import React from 'react';
import ContactForm from '../components/organisms/ContactForm/ContactForm';

const TemplateContatoPage: React.FC = () => {
  return (
    <div>
      {/* <h1>Página de Contato</h1> -- Título já está no ContactForm */}
      <ContactForm />
    </div>
  );
};

export default TemplateContatoPage;