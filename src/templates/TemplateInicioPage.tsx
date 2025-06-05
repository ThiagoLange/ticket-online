// src/templates/TemplateInicioPage.tsx
import React from 'react';
import Image from '../components/atoms/Image/Image';
import cinemaBanner from '../assets/cinema-banner.jpg';

const TemplateInicioPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <Image
        src={cinemaBanner}
        alt="Fachada de um cinema"
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
};

export default TemplateInicioPage;