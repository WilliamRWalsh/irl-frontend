import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Dashboard from "./components/dashboard/dashboard";
import Customize from "./components/customize/customize";
import LoginForm from "./components/loginForm/loginForm";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar
          className="nav-bar nav-fill w-100"
          expand="xl"
          variant="dark"
          bg="dark"
        >
          <Navbar.Brand>
            <Link to="/">IRL</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavDropdown title="Customize" id="customize-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/customize">Quests</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/login">Login</Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/customize" component={Customize} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    );
  }
}

export default App;
