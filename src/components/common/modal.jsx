import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.scss";

const CenteredModal = ({ children, show }) => {
  return (
    <Modal show={show} onHide={() => {}} size="md" centered className="model">
      {children}
    </Modal>
  );
};

export default CenteredModal;
