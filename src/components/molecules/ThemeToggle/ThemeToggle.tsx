// src/components/molecules/ThemeToggle/ThemeToggle.tsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../contexts/ThemeContext';
import Icon from '../../atoms/Icon/Icon';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeToggleButton} aria-label="Alternar tema">
      <Icon size={20}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </Icon>
    </button>
  );
};

export default ThemeToggle;