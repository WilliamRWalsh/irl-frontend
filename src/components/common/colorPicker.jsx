import React, { Component } from "react";
import { TwitterPicker } from "react-color";
import "./colorPicker.scss";

class ColorPicker extends Component {
  state = { isOpen: false, color: "#7fe5f0" };

  renderColorPicker = () => {
    if (this.state.isOpen)
      return (
        <TwitterPicker
          className="color-picker"
          onChangeComplete={this.handleChangeComplete}
          colors={[
            "#7fe5f0",
            "#DB3E00",
            "#FCCB00",
            "#ff80ed",
            "#00ff00",
            "#1273DE",
            "#ff00ff",
          ]}
        />
      );
  };

  handleChangeComplete = color => {
    const isOpen = false;
    this.setState({ color: color.hex, isOpen });
    this.props.onChange(this.state.color);
  };

  openColorPicker = () => {
    const isOpen = true;
    this.setState({ isOpen });
  };

  render() {
    return (
      <div
        onClick={this.openColorPicker}
        style={{ background: this.state.color }}
        className="color-box"
      >
        {this.renderColorPicker()}
      </div>
    );
  }
}

export default ColorPicker;
