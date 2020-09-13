import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Dashboard from "./components/dashboard";
import Customize from "./components/customize";
import LoginPage from "./components/loginPage/loginPage";
import { getCurrentUser } from "./services/jwtService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

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
            <Link to="/customize">Customize</Link>
            <Link to="/login">Login</Link>
          </Nav>

          <h1>
            {this.state.user && this.state.user.email}{" "}
            {this.state.user && this.state.user._id}
          </h1>
        </Navbar>

        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/customize" component={Customize} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    );
  }
}

export default App;
