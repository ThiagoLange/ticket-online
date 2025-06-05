// src/components/molecules/MovieCard/MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../../../data/movieTypes';
import Button from '../../atoms/Button/Button';
import Image from '../../atoms/Image/Image';
import styles from './MovieCard.module.css';
import { useTheme } from '../../../contexts/ThemeContext';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
      <Image src={movie.posterUrl} alt={`Cartaz do filme ${movie.name}`} className={styles.poster} />
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.name}</h3>
        <p className={styles.details}><strong>Gênero:</strong> {movie.genre}</p>
        <p className={styles.details}><strong>Classificação:</strong> {movie.ageRating}</p>
        <Link to={`/filmes/${movie.id}`}>
          <Button variant="primary">Ver mais informações</Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;