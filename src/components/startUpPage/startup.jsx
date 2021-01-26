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

  addStepCounter = () => {
    /* Will close modal when totalSteps reached */

    const step = this.state.step + 1;
    if (step == this.state.totalSteps) {
      this.setState({ isShowing: false });
      this.props.onComplete();
      return;
    }
    this.setState({ step });
  };

  handleOnClick = skill => {
    if (skill) this.setState({ skill });
    this.addStepCounter();
  };

  renderComponent = () => {
    switch (this.state.step) {
      case 0:
        return <Welcome onClick={this.handleOnClick} />;
      case 1:
        return <PickSkill onClick={this.handleOnClick} />;
      case 2:
        return (
          <PickQuest skill={this.state.skill} onClick={this.handleOnClick} />
        );
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
