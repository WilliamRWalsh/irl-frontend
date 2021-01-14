import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Quests from "./quests";
import Skills from "./skills";
import { getAllUsersQuests, completeQuest } from "../services/questService";
import { getAllUsersSkills } from "../services/skillService";
import StartUp from "./startup";
import "../static/styles/index.scss";
import "./dashboard.scss";

class Dashboard extends Component {
  state = {};

  async componentDidMount() {
    const quests = await getAllUsersQuests();
    const skills = await getAllUsersSkills();
    this.setState({ quests, skills });
  }

  // TODO: How can I pull this out to a service?
  handleCompleted = quest => {
    // Update quest state to completed
    const quests = [...this.state.quests];
    const index = quests.indexOf(quest);
    quests[index].isCompleted = true;

    // Update skill state with new xp
    const skills = [...this.state.skills];
    const skill = skills.find(skill => skill._id === quest.skill);
    const skillIndex = skills.indexOf(skill);

    const newXp = skill.xp + quest.xp;
    // If skill levels up
    if (newXp >= skill.levelXp) {
      // Fill up skill bar
      skills[skillIndex].xp = skill.levelXp;
      const remainingXp = newXp - skill.levelXp;
      this.setState({ quests, skills });

      // Level up and reset xp in skill bar
      setTimeout(() => {
        skills[skillIndex].level++;
        skills[skillIndex].xp = 0;
        this.setState({ skills, rollover: true });
      }, 500);

      // Fill up remaining xp
      setTimeout(() => {
        skills[skillIndex].xp = remainingXp;
        this.setState({ skills, rollover: false });
      }, 800);
    } else {
      skills[skillIndex].xp = newXp;
      this.setState({ quests, skills });
    }

    // Call backend to update quest to completed
    completeQuest(quest);
  };

  render() {
    return (
      <div className="sheet">
        <Container>
          <Row className="main-content">
            <Col xs={3}>
              <Skills
                skills={this.state.skills}
                rollover={this.state.rollover}
              />
            </Col>
            <Col xs={6}>
              <Quests
                quests={this.state.quests}
                onCompleted={this.handleCompleted}
              />
            </Col>
            <Col xs={2}></Col>
          </Row>
          <Row>
            <StartUp></StartUp>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
