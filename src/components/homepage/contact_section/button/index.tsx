import React from 'react';
import './styles.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <button type={type} className="submit-button">
      {children}
    </button>
  );
};

export default Button;