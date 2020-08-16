import React, { Component } from 'react';

class Attribute extends Component {
  render() {
    return (<div>{this.props.attribute.name}</div>);
  }
}

export default Attribute;