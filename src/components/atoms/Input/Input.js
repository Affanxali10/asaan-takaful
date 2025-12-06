'use client';

import { useId } from 'react';
import styles from './Input.module.css';

export default function Input({
  label,
  error,
  disabled = false,
  required = false,
  className = '',
  id,
  ...props
}) {
  const reactId = useId();
  const inputId = id || reactId;

  const inputClasses = [
    styles.input,
    error && styles.error,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <input
        id={inputId}
        className={inputClasses}
        disabled={disabled}
        {...props}
      />

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
