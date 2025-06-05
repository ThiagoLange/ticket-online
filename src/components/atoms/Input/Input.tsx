// src/components/atoms/Input/Input.tsx
import React from 'react';
import styles from './Input.module.css';

interface InputProps extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'autoComplete'>,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'autoComplete'> {
    
    // Nossas props customizadas
    label?: string;
    error?: string;
    as?: 'input' | 'textarea'; // Controla qual elemento é renderizado

    // Redeclaração da propriedade conflitante com um tipo unificado
    autoComplete?: string;

    // As seguintes propriedades são herdadas das interfaces base (após Omit):
    // - 'rows' (de TextareaHTMLAttributes)
    // - 'type', 'value', 'checked', etc. (de InputHTMLAttributes)
    // - 'name', 'id', 'onChange', 'onBlur', 'placeholder', etc. (de ambas, sem conflito após 'autoComplete' ser tratado)
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, name, error, as = 'input', className, ...props }, ref) => {
    const InputElement = as;
    const elementId = props.id || name;

    return (
      <div className={styles.inputGroup}>
        {label && <label htmlFor={elementId} className={styles.label}>{label}</label>}
        <InputElement
          id={elementId}
          name={name}
          className={
            `${styles.input} ${error ? styles.inputError : ''} ${as === 'textarea' ? styles.textarea : ''} ${className || ''}`
          }
          ref={ref}
          {...props} // Inclui 'rows', 'type', 'autoComplete' (agora unificado), etc.
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;