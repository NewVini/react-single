import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('should render the input with a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input value="" onChange={() => {}} placeholder="Buscar..." onIconClick={() => {}} onClear={() => {}} />
    );
    expect(getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });

  it('should call onChange when typing', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input value="" onChange={onChangeMock} placeholder="Buscar..." onIconClick={() => {}} onClear={() => {}} />
    );
    const inputElement = getByPlaceholderText('Buscar...');

    fireEvent.change(inputElement, { target: { value: 'Novo valor' } });
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should render the search icon when input is empty', () => {
    const { getByTestId } = render(
      <Input value="" onChange={() => {}} placeholder="Buscar..." onIconClick={() => {}} onClear={() => {}} />
    );
    const searchIcon = getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
  });

  it('should render the clear icon when input has value', () => {
    const { getByTestId } = render(
      <Input value="Test" onChange={() => {}} placeholder="Buscar..." onIconClick={() => {}} onClear={() => {}} />
    );
    const clearIcon = getByTestId('clear-icon');
    expect(clearIcon).toBeInTheDocument();
  });

  it('should call onIconClick when search icon is clicked', () => {
    const onIconClickMock = jest.fn();
    const { getByTestId } = render(
      <Input value="" onChange={() => {}} placeholder="Buscar..." onIconClick={onIconClickMock} onClear={() => {}} />
    );
    const searchIcon = getByTestId('search-icon');

    fireEvent.click(searchIcon);
    expect(onIconClickMock).toHaveBeenCalled();
  });

  it('should call onClear when clear icon is clicked', () => {
    const onClearMock = jest.fn();
    const { getByTestId } = render(
      <Input value="Test" onChange={() => {}} placeholder="Buscar..." onIconClick={() => {}} onClear={onClearMock} />
    );
    const clearIcon = getByTestId('clear-icon');

    fireEvent.click(clearIcon);
    expect(onClearMock).toHaveBeenCalled();
  });
});
