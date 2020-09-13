import React, { Component } from "react";
import Template from "./template";
import { Accordion } from "react-bootstrap";

import "./quests.scss";

class Templates extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h3 className="quests-title">Quest Options</h3>
        <Accordion>
          {this.props.templates &&
            this.props.templates.map(template => (
              <Template
                key={template._id}
                template={template}
                onIsActiveChange={this.props.onIsActiveChange}
                onDeleteTemplate={this.props.onDeleteTemplate}
              />
            ))}
        </Accordion>
      </React.Fragment>
    );
  }
}

export default Templates;
