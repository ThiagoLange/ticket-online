// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css'; // Importar estilos globais

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;