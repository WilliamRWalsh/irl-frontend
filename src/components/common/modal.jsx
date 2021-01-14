import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.scss";

const CenteredModal = ({ title, body, button, onClick, show }) => {
  return (
    <Modal show={show} size="md" centered className="model">
      <Modal.Title className="centered-modal">
        <h4 className="modal-title">{title}</h4>
      </Modal.Title>
      <Modal.Body className="centered-modal">
        <p className="body-text">{body}</p>
        <div className="button">
          <Button variant="danger" onClick={() => onClick()}>
            {button}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CenteredModal;
