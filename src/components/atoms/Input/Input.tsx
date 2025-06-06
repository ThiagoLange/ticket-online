import React from 'react';
import styles from './Input.module.css';

type BaseProps = {
    label?: string;
    error?: string;
};

type InputAsProps = BaseProps & {
    as?: 'input';
} & React.ComponentPropsWithRef<'input'>;

type TextareaAsProps = BaseProps & {
    as: 'textarea';
} & React.ComponentPropsWithRef<'textarea'>;

type InputProps = InputAsProps | TextareaAsProps;

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {

    const { as = 'input', label, error, className, ...rest } = props;

    const elementId = props.id || props.name;
    const commonClasses = `${styles.input} ${error ? styles.inputError : ''} ${className || ''}`;

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