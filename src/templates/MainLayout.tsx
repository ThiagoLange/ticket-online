// src/templates/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import { useTheme } from '../contexts/ThemeContext';

const MainLayout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-layout theme-${theme}`}>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;