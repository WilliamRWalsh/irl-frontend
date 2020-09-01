import React, { Component } from "react";
import Quest from "../quest/quest";
import { Accordion } from "react-bootstrap";

import "./quests.scss";
import Axios from "axios";
import { getAllUsersQuests } from "../../services/questService";

class Quests extends Component {
  state = {
    quests: [
      {
        _id: 1,
        name: "Calm Your Mind",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur orci purus, et scelerisque lectus volutpat sit amet. Morbi malesuada sagittis mollis. Donec ac ornare tortor, sed semper turpis. Duis ante sapien, egestas accumsan erat a, ultricies fringilla diam. Sed rhoncus est vel ex vestibulum elementum. Proin venenatis leo sit amet felis lacinia mattis ut sit amet mi. Quisque vel magna ut velit sollicitudin interdum eget at erat. Pellentesque bibendum felis eget magna luctus, eget ornare ante ornare.",
        isCompleted: false,
        xp: 15,
      },
      {
        _id: 2,
        name: "Throw Around Some Heavy Junk",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim aliquam consectetur. Praesent quis placerat tortor, in semper dui. Phasellus at eleifend odio. Sed nec turpis congue, malesuada nulla in, ultrices orci. Nunc luctus vel ex vitae tempor. Mauris porta porta volutpat. Curabitur mollis nulla vel euismod condimentum. Nullam sed sagittis turpis. Morbi interdum posuere condimentum. Sed eros massa, suscipit non leo eget, tempus dictum leo.",
        isCompleted: false,
        xp: 30,
      },
      {
        _id: 3,
        name: "Read a Book!",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim aliquam consectetur. Praesent quis placerat tortor, in semper dui. Phasellus at eleifend odio. Sed nec turpis congue, malesuada nulla in, ultrices orci. Nunc luctus vel ex vitae tempor. Mauris porta porta volutpat. Curabitur mollis nulla vel euismod condimentum. Nullam sed sagittis turpis. Morbi interdum posuere condimentum. Sed eros massa, suscipit non leo eget, tempus dictum leo.",
        isCompleted: true,
        xp: 15,
      },
    ],
  };

  async componentDidMount() {
    const quests = getAllUsersQuests();
    console.log(quests);
    // this.setState({ quests });
  }

  handleCompleted = quest => {
    const quests = [...this.state.quests];
    const index = quests.indexOf(quest);
    quests[index].isCompleted = true;
    this.setState({ quests });
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="quests-title">Quests</h3>
        <Accordion>
          {this.state.quests.map(quest => (
            <Quest
              key={quest._id}
              quest={quest}
              onCompleted={this.handleCompleted}
            />
          ))}
        </Accordion>
      </React.Fragment>
    );
  }
}

export default Quests;
