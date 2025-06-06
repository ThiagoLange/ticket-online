// src/pages/DetalhesFilmePage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import TemplateDetalhesFilmePage from '../templates/TemplateDetalhesFilmePage';
import { mockMovies } from '../data/mockMovies'; // Importando o mock
import type { Movie } from '../data/movieTypes';

const DetalhesFilmePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie: Movie | undefined = mockMovies.find(m => m.id === id);

  return <TemplateDetalhesFilmePage movie={movie} />;
};

export default DetalhesFilmePage;