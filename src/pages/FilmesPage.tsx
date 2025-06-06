// src/pages/FilmesPage.tsx
import React from 'react';
import TemplateFilmesPage from '../templates/TemplateFilmesPage';
import { mockMovies } from '../data/mockMovies'; // Importando o mock

const FilmesPage: React.FC = () => {
  const movies = mockMovies;
  return <TemplateFilmesPage movies={movies} />;
};

export default FilmesPage;