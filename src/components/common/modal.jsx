import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.scss";

const CenteredModal = ({}) => {
  return (
    <Modal show={true} size="md" centered className="model">
      <Modal.Title className="centered-modal">
        <h4 className="modal-title">Welcome!</h4>
      </Modal.Title>
      <Modal.Body className="centered-modal">
        <p className="body-text">
          The only way to become an expert in a field, or make a huge change in
          your life is by taking a small step in the right direction everyday.
        </p>
        <div className="button">
          <Button variant="danger">Begin</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CenteredModal;
