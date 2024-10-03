import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus-within {
    border-color: #007bff; /* Cor de foco moderna */
    background-color: #fff; /* Fundo branco ao focar */
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2); /* Sombra suave ao focar */
  }
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  flex: 1;
  font-size: 1rem;
  background: transparent;
  color: #333;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: #007bff;
  cursor: pointer; /* Cursor de clique */
  margin-left: 10px;
  font-size: 1.4rem;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;

export const ClearIcon = styled(FaTimes)`
  color: #dc3545;
  cursor: pointer; /* Cursor de clique */
  margin-left: 10px;
  font-size: 1.4rem;
  transition: color 0.2s;

  &:hover {
    color: #c82333;
  }
`;
