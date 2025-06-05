// src/components/organisms/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { useTheme } from '../../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? styles.dark : ''}`}>
      <p>&copy; {new Date().getFullYear()} TicketOnline. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;