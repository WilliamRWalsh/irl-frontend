import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'

import './quest.scss';


class Quest extends Component {

  render() {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.quest._id}>
          <div>
            <Button className="complete-btn" variant="success" size="sm"></Button>
            <span >{this.props.quest.name}</span >
            <span className="xp">{this.props.quest.xp} XP</span >
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.quest._id}>
          <Card.Body>{this.props.quest.description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default Quest;