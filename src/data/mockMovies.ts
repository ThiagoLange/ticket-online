// src/data/mockMovies.ts
import type { Movie } from './movieTypes';

import posterAventuraEpica from '../assets/Aventura-Epica.jpg';
import posterComediaDesastrada from '../assets/Comedia-Desastrada.jpg';
import posterDramaIntenso from '../assets/Drama-Intenso.jpg';
import posterFiccaoCientifica from '../assets/Ficcao-Cientifica-Futurista.jpg';
import posterTerrorArrepiante from '../assets/Terror-Arrepiante.jpg';
import posterAnimacaoEncantadora from '../assets/Animacao-Encantadora.jpg';


export const mockMovies: Movie[] = [
  {
    id: '1',
    name: 'Aventura Épica',
    posterUrl: posterAventuraEpica,
    genre: 'Aventura, Fantasia',
    ageRating: '12',
    synopsis: 'Uma jornada incrível por terras desconhecidas para salvar o reino da escuridão iminente. Heróis improváveis se unem contra um mal antigo.',
  },
  {
    id: '2',
    name: 'Comédia Desastrada',
    posterUrl: posterComediaDesastrada,
    genre: 'Comédia',
    ageRating: 'Livre',
    synopsis: 'Quando uma série de mal-entendidos hilários acontece, um grupo de amigos precisa consertar a bagunça antes que seja tarde demais.',
  },
  {
    id: '3',
    name: 'Drama Intenso',
    posterUrl: posterDramaIntenso,
    genre: 'Drama',
    ageRating: '16',
    synopsis: 'Segredos de família vêm à tona, forçando cada membro a confrontar verdades dolorosas e redefinir seus relacionamentos.',
  },
  {
    id: '4',
    name: 'Ficção Científica Futurista',
    posterUrl: posterFiccaoCientifica,
    genre: 'Ficção Científica, Ação',
    ageRating: '14',
    synopsis: 'Em um futuro distópico, uma rebelde luta contra um sistema opressor para trazer liberdade à humanidade.',
  },
  {
    id: '5',
    name: 'Terror Arrepiante',
    posterUrl: posterTerrorArrepiante,
    genre: 'Terror, Suspense',
    ageRating: '18',
    synopsis: 'Uma casa isolada guarda um segredo sombrio que aterroriza seus novos moradores. Eles conseguirão escapar?',
  },
  {
    id: '6',
    name: 'Animação Encantadora',
    posterUrl: posterAnimacaoEncantadora,
    genre: 'Animação, Família',
    ageRating: 'Livre',
    synopsis: 'Uma criatura mágica embarca em uma aventura para encontrar seu lugar no mundo, fazendo amigos leais pelo caminho.',
  },
];