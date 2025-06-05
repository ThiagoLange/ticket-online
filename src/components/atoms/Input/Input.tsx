// src/components/atoms/Input/Input.tsx
import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  as?: 'input' | 'textarea';
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, name, error, as = 'input', ...props }, ref) => {
    const InputElement = as;
    return (
      <div className={styles.inputGroup}>
        {label && <label htmlFor={name} className={styles.label}>{label}</label>}
        <InputElement
          id={name}
          name={name}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          ref={ref as any} // eslint-disable-line @typescript-eslint/no-explicit-any
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;