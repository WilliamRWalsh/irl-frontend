import React, { Component } from "react";
import { createSkill } from "../../services/skillService";

import CenteredModal from "../common/modal";
import Welcome from "./components/welcome";
import PickSkill from "./components/pickSkill";
import PickQuest from "./components/pickQuest";

class StartUp extends Component {
  state = {
    isShowing: true,
    skill: {},
    step: 0,
    totalSteps: 3,
  };

  // formSkill = ({ data, errors }) => {};

  // setSkill = ({ name, color }) => {
  //   this.setState({ skill: { name, color } });
  //   // await createSkill(data);
  // };

  addStepCounter = () => {
    /* Will close modal when totalSteps reached */

    const step = this.state.step + 1;
    if (step == this.state.totalSteps) {
      this.setState({ isShowing: false });
      return;
    }
    this.setState({ step });
  };

  handleOnClickBegin = () => {
    this.addStepCounter();
  };

  renderComponent = () => {
    switch (this.state.step) {
      case 0:
        return <Welcome onClickBegin={this.handleOnClickBegin} />;
      case 1:
        return <PickSkill onClickBegin={this.handleOnClickBegin} />;
      case 2:
        return <PickQuest onClickBegin={this.handleOnClickBegin} />;
    }
  };

  render() {
    return (
      <CenteredModal show={this.state.isShowing}>
        {this.renderComponent()}
      </CenteredModal>
    );
  }
}

export default StartUp;
