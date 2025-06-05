// src/templates/TemplateFilmesPage.tsx
import React from 'react';
import MovieGrid from '../components/organisms/MovieGrid/MovieGrid';
import { Movie } from '../data/movieTypes';

interface TemplateFilmesPageProps {
  movies: Movie[];
}

const TemplateFilmesPage: React.FC<TemplateFilmesPageProps> = ({ movies }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Filmes em Cartaz</h1>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default TemplateFilmesPage;