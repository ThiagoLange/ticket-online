// src/templates/TemplateInicioPage.tsx
import React from 'react';
import Image from '../components/atoms/Image/Image';
import cinemaBanner from '../assets/cinema-banner.jpg'; // Ensure this path is correct relative to this file

const TemplateInicioPage: React.FC = () => {
  return (
    // The parent div's textAlign: 'center' can help with other inline elements if added later.
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <Image
        src={cinemaBanner}
        alt="Fachada de um cinema"
        style={{
          display: 'block',    // Ensures the image is a block-level element (already set by Image.module.css)
          margin: '0 auto',    // Centers the block-level image horizontally
          width: '100%',       // Makes the image take the full width of its parent container
                               // This will make it "larger" if its natural width was smaller.
          maxWidth: '100%',    // Ensures responsiveness and that it doesn't overflow its natural size if parent is larger (though width: '100%' usually governs here)
          height: 'auto',      // Maintains the image's aspect ratio
          objectFit: 'cover',  // Ensures the image covers the defined area, potentially cropping to fit.
                               // This is useful for banners to fill space without distortion.
          borderRadius: '8px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          // Optional: If the image becomes too tall with width: '100%',
          // you could add a maxHeight, e.g., maxHeight: '500px' or '60vh'.
        }}
      />
    </div>
  );
};

export default TemplateInicioPage;