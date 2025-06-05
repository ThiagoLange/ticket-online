// src/components/organisms/Header/Header.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../../molecules/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';
import { useTheme } from '../../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme } = useTheme();
  return (
    <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={styles.logo}>TicketOnline 🎟️</Link>
        <nav className={styles.nav}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Início</NavLink></li>
            <li><NavLink to="/filmes" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Filmes</NavLink></li>
            <li><NavLink to="/contato" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contato</NavLink></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;