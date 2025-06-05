// src/templates/TemplateInicioPage.tsx
import React from 'react';
import Image from '../components/atoms/Image/Image';
// Use uma imagem de banner de cinema. Coloque-a em `src/assets/` ou `public/`
// Exemplo: import cinemaBanner from '../assets/cinema-banner.jpg';
// Por agora, usaremos um placeholder se a imagem não estiver disponível.
// Certifique-se que a imagem cinema-banner.jpg está na pasta public
const cinemaBanner = '/cinema-banner.jpg';


const TemplateInicioPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <Image
        src={cinemaBanner}
        alt="Fachada de um cinema"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
      />
    </div>
  );
};

export default TemplateInicioPage;