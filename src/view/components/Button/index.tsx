import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  text: string
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className = { styles.startButton } onClick={onClick}>{ text }</button>
  );
};

