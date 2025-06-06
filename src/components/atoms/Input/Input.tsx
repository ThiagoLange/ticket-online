import React from 'react';
import styles from './Input.module.css';

type BaseProps = {
    label?: string;
    error?: string;
};

type InputAsProps = BaseProps & {
    as?: 'input';
} & React.ComponentPropsWithRef<'input'>;

// Define the props specifically for when the component renders a <textarea>.
type TextareaAsProps = BaseProps & {
    as: 'textarea';
} & React.ComponentPropsWithRef<'textarea'>;

// Create a discriminated union for all possible props
type InputProps = InputAsProps | TextareaAsProps;

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
    
    // Destructure 'as', 'label', 'error', and 'className' directly from props.
    // The rest of the props are collected in the 'rest' object.
    const { as = 'input', label, error, className, ...rest } = props;

    const elementId = props.id || props.name;
    const commonClasses = `${styles.input} ${error ? styles.inputError : ''} ${className || ''}`;

    // Now, the conditional check uses the destructured 'as' variable.
    if (as === 'textarea') {
      return (
        <div className={styles.inputGroup}>
          {label && <label htmlFor={elementId} className={styles.label}>{label}</label>}
          <textarea
            className={`${commonClasses} ${styles.textarea}`}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
          {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
      );
    }

    // Default case: render an <input> element.
    return (
      <div className={styles.inputGroup}>
        {label && <label htmlFor={elementId} className={styles.label}>{label}</label>}
        <input
          className={commonClasses}
          ref={ref as React.Ref<HTMLInputElement>}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;