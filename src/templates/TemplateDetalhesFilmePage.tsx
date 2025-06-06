// src/templates/TemplateDetalhesFilmePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Movie } from '../data/movieTypes';
import Button from '../components/atoms/Button/Button';
import Image from '../components/atoms/Image/Image';
import styles from './TemplateDetalhesFilmePage.module.css';
import { useTheme } from '../contexts/ThemeContext';

interface TemplateDetalhesFilmePageProps {
  movie: Movie | undefined;
}

const TemplateDetalhesFilmePage: React.FC<TemplateDetalhesFilmePageProps> = ({ movie }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  if (!movie) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <div className={`${styles.detailsContainer} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.posterSection}>
        <Image src={movie.posterUrl} alt={`Cartaz de ${movie.name}`} className={styles.poster} />
      </div>
      <div className={styles.infoSection}>
        <h1 className={styles.title}>{movie.name}</h1>
        <p><strong>Gênero:</strong> {movie.genre}</p>
        <p><strong>Classificação Indicativa:</strong> {movie.ageRating}</p>
        <p><strong>Sinopse:</strong> {movie.synopsis}</p>
        <Button onClick={() => navigate(-1)} variant="secondary" style={{marginTop: '20px'}}>
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default TemplateDetalhesFilmePage;