import React, { Component } from 'react';
import { Accordion, Card, Badge } from 'react-bootstrap'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './quest.scss';


class Quest extends Component {

  renderQuestStatus() {
    if (this.props.quest.isCompleted === true)
      return <CheckCircleIcon className="complete-btn completed" />
    return <RadioButtonUncheckedIcon className="complete-btn" onClick={() => this.props.onCompleted(this.props.quest)} />
  }

  render() {
    return (
      <Card>
        <Card.Header>
          {this.renderQuestStatus()}
          <span >{this.props.quest.name}</span >
          <span className="xp">{this.props.quest.xp} XP
            <Accordion.Toggle className="arrow" as={Badge} eventKey={this.props.quest._id}>
              <KeyboardArrowDownIcon />
            </Accordion.Toggle>
          </span >
        </Card.Header>

        <Accordion.Collapse eventKey={this.props.quest._id}>
          <Card.Body>{this.props.quest.description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default Quest;