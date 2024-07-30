import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  max?: number | string; 
  value?: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ max, value, step, onChange }) => {
  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min={0}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
  );
};

export default ProgressBar;