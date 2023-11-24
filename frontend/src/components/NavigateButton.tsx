import React from 'react';
import { Link } from 'react-router-dom';

interface NavigateButtonProps {
  to: string;
  label: string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ to, label }) => {
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  );
};

export default NavigateButton;
