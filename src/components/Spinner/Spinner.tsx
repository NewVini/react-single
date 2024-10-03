import React from 'react';
import { SpinnerContainer } from './Spinner.styles';

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <div className="spinner" />
    </SpinnerContainer>
  );
};

export default Spinner;
