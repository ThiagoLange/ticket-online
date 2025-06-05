// src/pages/FilmesPage.tsx
import React from 'react';
import TemplateFilmesPage from '../templates/TemplateFilmesPage';
import { mockMovies } from '../data/mockMovies'; // Importando o mock

const FilmesPage: React.FC = () => {
  // Em um app real, você buscaria os filmes de uma API aqui
  const movies = mockMovies;
  return <TemplateFilmesPage movies={movies} />;
};

export default FilmesPage;