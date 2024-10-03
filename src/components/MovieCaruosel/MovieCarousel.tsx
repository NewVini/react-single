import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CarouselContainer,
  MovieRow,
  MovieCard,
  MovieInfo,
  NavButton,
} from './MovieCarousel.styles'; 

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <CarouselContainer>
      <h1>Netflix Movie Carousel</h1>
      <NavButton direction="left" onClick={() => handleScroll('left')}>
        &#8249;
      </NavButton>
      <MovieRow ref={carouselRef}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieInfo>
                <h3>{movie.title}</h3>
              </MovieInfo>
            </Link>
          </MovieCard>
        ))}
      </MovieRow>
      <NavButton direction="right" onClick={() => handleScroll('right')}>
        &#8250;
      </NavButton>
    </CarouselContainer>
  );
};

export default MovieCarousel;
