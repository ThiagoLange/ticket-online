// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InicioPage from '../pages/InicioPage';
import FilmesPage from '../pages/FilmesPage';
import DetalhesFilmePage from '../pages/DetalhesFilmePage';
import ContatoPage from '../pages/ContatoPage';
import MainLayout from '../templates/MainLayout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<InicioPage />} />
        <Route path="/filmes" element={<FilmesPage />} />
        <Route path="/filmes/:id" element={<DetalhesFilmePage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;