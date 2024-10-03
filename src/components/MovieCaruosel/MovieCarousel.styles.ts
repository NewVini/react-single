import styled from 'styled-components';

export const CarouselContainer = styled.div`
  padding: 20px;
  position: relative;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const MovieRow = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const MovieCard = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 150px;
  transition: transform 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }

  img {
    border-radius: 10px;
    width: 100%;
    object-fit: cover;
  }
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  width: 100%;
  padding: 5px;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 0 0 10px 10px;
`;

export const NavButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 2;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${({ direction }) => (direction === 'left' ? `left: 10px;` : `right: 10px;`)};
`;
