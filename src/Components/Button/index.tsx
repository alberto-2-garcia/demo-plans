import React from 'react';
import { ButtonProps } from './interface';
import './styles.scss';

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}> {children} </button>
  )
}

export default Button;
