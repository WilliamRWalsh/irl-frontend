import React from "react";
import { Modal } from "react-bootstrap";
import AddSkillForm from "./../../common/addSkillForm";

const PickSkill = ({ onClick }) => {
  return (
    <React.Fragment>
      <Modal.Title className="centered-modal">
        <h4 className="modal-title">Skill or Goal</h4>
      </Modal.Title>
      <Modal.Body className="centered-modal">
        <p className="body-text">
          Picture the skill or goal you want to reach as a mountain in the
          distance. What is the name of your mountain?
        </p>
        <AddSkillForm onClick={onClick}></AddSkillForm>
      </Modal.Body>
    </React.Fragment>
  );
};

export default PickSkill;
