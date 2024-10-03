
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTg1NzU0MmVkYjY1ZWRmMTc0Y2MzNWU1NWI2NjVlNSIsIm5iZiI6MTcyNzg5OTU0Ny4yNjY4NjgsInN1YiI6IjY2ZmRhMDQxMTU5MmVmMWJhOTg0YjU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EGYTGPQW8U-toliqHCRhSZytCkINOkxK6pVDDHtvG-g`,
  },
});

export const getPopularMovies = async (page: number) => {
  const response = await api.get('/movie/popular', {
    params: {
      page: page,
    },
  });
  return response;
};

export const getMovieImages = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}/images`);
  return response;
};

export const searchMovies = async (query: string, page: number = 1, includeAdult: boolean = false, language: string = 'en-US') => {
  const response = await api.get('/search/movie', {
    params: {
      query, 
      page, 
      include_adult: includeAdult, 
      language, 
    },
  });
  return response;
};
