// src/templates/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import { useTheme } from '../contexts/ThemeContext';

const MainLayout: React.FC = () => {
  const { theme } = useTheme(); // Access theme if needed for the main layout div

  // This div wrapper ensures the theme class from body applies correctly if there are specific layout styles
  return (
    <div className={`app-layout theme-${theme}`}>
      <Header />
      <main className="container"> {/* Added container class for consistent padding/max-width */}
        <Outlet /> {/* Pages will be rendered here */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;