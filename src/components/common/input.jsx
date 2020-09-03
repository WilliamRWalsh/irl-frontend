import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  isAutoFocused,
}) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        autoFocus={isAutoFocused}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default Input;
