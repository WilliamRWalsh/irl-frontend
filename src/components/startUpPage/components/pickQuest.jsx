import React from "react";
import { Modal, Button } from "react-bootstrap";
import AddQuestForm from "./../../common/addQuestForm";

const PickQuest = ({ onClick, skill }) => {
  return (
    <React.Fragment>
      <Modal.Title className="centered-modal">
        <h4 className="modal-title">Habit</h4>
      </Modal.Title>
      <Modal.Body className="centered-modal">
        <p className="body-text">
          Every day you may take one deliberate step to your mountain each day.
          What is the daily habit that will be your step?
        </p>
        <AddQuestForm skill={skill} onClick={onClick}></AddQuestForm>
      </Modal.Body>
    </React.Fragment>
  );
};

export default PickQuest;
