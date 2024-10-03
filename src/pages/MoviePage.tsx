import React, { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from '../api/api';
import MovieList from '../components/MovieCaruosel/MovieCarousel';
import Input from '../components/Input/Input'; 
import { PageContainer, PageTitle, SearchForm } from './MoviePage.styles';
import Spinner from '../components/Spinner/Spinner';

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (term: string) => {
    setLoading(true);
    try {
      const response = term
        ? await searchMovies(term)
        : await getPopularMovies(1);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetchMovies(searchTerm);
    }
    if (searchTerm.length === 0) {
      fetchMovies('');
    }
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <PageContainer>
      <PageTitle>Listagem e Busca de Filmes</PageTitle>
      <SearchForm>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar filmes..."
          onIconClick={() => fetchMovies(searchTerm)}
          onClear={handleClear}
        />
      </SearchForm>
      {loading ? <Spinner /> : <MovieList movies={movies} />}
    </PageContainer>
  );
};

export default MoviePage;
