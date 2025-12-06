'use client';

import { useId } from 'react';
import styles from './Textarea.module.css';

export default function Textarea({
  label,
  error,
  disabled = false,
  required = false,
  className = '',
  id,
  rows = 4,
  ...props
}) {
  const reactId = useId();
  const textareaId = id || reactId;

  const textareaClasses = [
    styles.textarea,
    error && styles.error,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        className={textareaClasses}
        disabled={disabled}
        rows={rows}
        {...props}
      />

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
