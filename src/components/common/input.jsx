import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  error,
  isAutoFocused,
  min,
  max,
  step,
  disabled,
  className,
}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <div className={className}>
        <Form.Control
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type || "text"}
          autoFocus={isAutoFocused}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default Input;
