import React from 'react';

export const InputField = ({
  value,
  children,
  setValue,
  errorMessage,
  onTouch,
}) => {
  const inputChangeHandler = e => {
    const inputValue = e.target.value;
    if (isNaN(+inputValue) || !inputValue === '') return;

    if (inputValue.startsWith('0') && inputValue.length > 1) return;

    if (setValue) setValue(inputValue.trim());
  };

  return (
    <React.Fragment>
      <input
        value={value}
        onChange={inputChangeHandler}
        onBlur={() => onTouch(true)}
        placeholder={children}
        className={`form-control ${errorMessage ? 'is-invalid' : ''} mb-3`}
        required
      />
      {errorMessage ? (
        <div className="invalid-feedback">{errorMessage}</div>
      ) : null}
    </React.Fragment>
  );
};
