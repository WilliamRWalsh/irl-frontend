import React, { Component } from "react";
import CenteredModal from "./common/modal";

class StartUp extends Component {
  state = {
    isShowing: true,
    step: 0,
    totalSteps: 3,
    workflow: [
      {
        title: "Welcome!",
        body:
          "The only way to become an expert in a field, or make a huge change in your life is by taking a small step in the right direction everyday.",
        button: "Begin",
      },
      {
        title: "Primary Skill",
        body: "What is the skill you most want to improve on?",
        button: "Next",
      },
      {
        title: "Daily Quest",
        body:
          "Pick a habit you want to do everyday to get one step closer to mastering X. It should take 5 minutes.",
        button: "Pledge",
      },
    ],
  };

  handleClick = () => {
    const step = this.state.step + 1;
    if (step == this.state.totalSteps) {
      this.setState({ isShowing: false });
      return;
    }
    this.setState({ step });
  };

  getTitle = () => {
    return this.state.workflow[this.state.step].title;
  };
  getBody = () => {
    return this.state.workflow[this.state.step].body;
  };
  getButton = () => {
    return this.state.workflow[this.state.step].button;
  };

  render() {
    return (
      <CenteredModal
        title={this.getTitle()}
        body={this.getBody()}
        button={this.getButton()}
        onClick={this.handleClick}
        show={this.state.isShowing}
      />
    );
  }
}

export default StartUp;
