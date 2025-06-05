// src/components/organisms/MovieGrid/MovieGrid.tsx
import React from 'react';
import type { Movie } from '../../../data/movieTypes';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import styles from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>Nenhum filme encontrado.</p>;
  }
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;