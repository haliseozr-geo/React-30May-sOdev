import React from "react";
import { Component } from "react";
import Roles from "./Roles";
import Users from "./Users";
import Navbar from "./Navbar";
import { Col, Row, Container } from "reactstrap";

export default class App extends Component {
  state = {
    currentRole: "",
    users: [],
  };

  changeRole = (role) => {
    this.setState({ currentRole: role.roleName });
    this.getUsers(role.id);
  };

  getUsers = (roleId) => {
    let url = "http://localhost:3000/users";
    if (roleId) {
      url += "?roleId=" + roleId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <Row>
            <Col xs="3">
              <p>Roller</p>
              <Roles
                changeRole={this.changeRole}
                currentRole={this.state.currentRole}
              />
            </Col>
            <Col xs="9">
              <p>Kullanıcılar</p>
              <Users
                users={this.state.users}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
