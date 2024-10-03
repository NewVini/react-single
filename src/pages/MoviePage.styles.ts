import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: #000;
  height: 100vh;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  input {
    margin-right: 10px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #555;
`;
