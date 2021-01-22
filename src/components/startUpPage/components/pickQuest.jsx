import React from "react";
import { Modal, Button } from "react-bootstrap";

const PickQuest = ({ onClickBegin }) => {
  return (
    <React.Fragment>
      <Modal.Title className="centered-modal">
        <h4 className="modal-title">Habit</h4>
      </Modal.Title>
      <Modal.Body className="centered-modal">
        <p className="body-text">
          Every day you may take one delberiate step to your mountain each day.
          What is the daily habit that will be your step?
        </p>
        <div className="button">
          <Button variant="danger" onClick={() => onClickBegin()}>
            Begin
          </Button>
        </div>
      </Modal.Body>
    </React.Fragment>
  );
};

export default PickQuest;
