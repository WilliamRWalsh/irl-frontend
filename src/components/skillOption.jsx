import React from "react";
import { Button } from "react-bootstrap";
import { getVariantColor } from "../utils/color";

const SkillOption = ({ skill, onClick }) => {
  return (
    <Button
      variant={getVariantColor(skill.color)}
      onClick={() => onClick(skill)}
    >
      {skill.name}
    </Button>
  );
};

export default SkillOption;
