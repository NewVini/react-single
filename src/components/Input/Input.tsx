import React from 'react';
import { InputContainer, StyledInput, SearchIcon, ClearIcon } from './Input.styles';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onIconClick: () => void; 
  onClear: () => void; 
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, onIconClick, onClear }) => {
  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'Buscar...'}
      />
      {value ? (
        <ClearIcon data-testid="clear-icon" onClick={onClear} /> 
      ) : (
        <SearchIcon data-testid="search-icon" onClick={onIconClick} /> 
      )}
    </InputContainer>
  );
};

export default Input;
