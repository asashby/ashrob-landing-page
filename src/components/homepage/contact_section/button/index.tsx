import React from 'react';
import './styles.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button type={type} className="submit-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;