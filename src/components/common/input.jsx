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
}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
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
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default Input;
