'use client';

import { useId } from 'react';
import Select from 'react-select';
import styles from './Dropdown.module.css';

export default function Dropdown(props) {
  const {
    label,
    error,
    required = false,
    options = [],
    value,
    onChange,
    placeholder = 'Select an option...',
    isMulti = false,
    isDisabled = false,
    isClearable = false,
    isSearchable = true,
    className = '',
    id,
    ...rest
  } = props;

  const reactIdRaw = useId();
  // sanitize useId (remove ":" chars) so react-select instanceId is valid
  const reactId = (reactIdRaw || '').replace(/:/g, '');

  const dropdownId = id || `dropdown-${reactId}`;

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused
        ? 'var(--border-focus)'
        : error
          ? 'var(--error)'
          : 'var(--border)',
      boxShadow: state.isFocused
        ? error
          ? '0 0 0 3px rgba(255, 0, 0, 0.1)'
          : '0 0 0 3px rgba(0, 144, 0, 0.1)'
        : 'none',
      '&:hover': {
        borderColor: error ? 'var(--error)' : 'var(--border-focus)',
      },
      backgroundColor: isDisabled ? 'var(--input-disabled)' : 'var(--input-bg)',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      minHeight: '40px',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? 'var(--primary)'
        : state.isFocused
          ? 'rgba(0, 144, 0, 0.1)'
          : 'var(--white)',
      color: state.isSelected ? 'var(--white)' : 'var(--foreground)',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: state.isSelected ? 'var(--primary)' : 'rgba(0, 144, 0, 0.2)',
      },
    }),
    placeholder: (base) => ({ ...base, color: 'var(--text-disabled)' }),
    singleValue: (base) => ({ ...base, color: 'var(--foreground)' }),
    multiValue: (base) => ({ ...base, backgroundColor: 'rgba(0, 144, 0, 0.1)' }),
    multiValueLabel: (base) => ({ ...base, color: 'var(--foreground)' }),
    multiValueRemove: (base) => ({
      ...base,
      color: 'var(--foreground)',
      '&:hover': { backgroundColor: 'var(--error)', color: 'var(--white)' },
    }),
    indicatorSeparator: (base) => ({ ...base, backgroundColor: 'var(--border)' }),
    dropdownIndicator: (base) => ({ ...base, color: 'var(--foreground)' }),
    clearIndicator: (base) => ({
      ...base,
      color: 'var(--foreground)',
      '&:hover': { color: 'var(--error)' },
    }),
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={dropdownId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={className}>
        <Select
          instanceId={reactId}       // ← important: stable instance id for react-select
          inputId={dropdownId}
          options={options}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isMulti={isMulti}
          isDisabled={isDisabled}
          isClearable={isClearable}
          isSearchable={isSearchable}
          styles={customStyles}
          className={error ? styles.error : ''}
          {...rest}
        />
      </div>

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
