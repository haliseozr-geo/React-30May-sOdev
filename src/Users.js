import React, { Component } from "react";
import {
  CardBody,
  CardImg,
  CardTitle,
  CardGroup,
  CardText,
  Col,
  Card,
  Button,
} from "reactstrap";

export default class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <CardGroup>
          {users.map((user) => (
            <Col xs="3">
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }}
                key={user.id}
              >
                <CardImg
                  top
                  width="100%"
                  src={user.image}
                  alt={user.userName}
                />
                <CardBody>
                  <CardTitle>{user.userName}</CardTitle>
                  <CardText>{user.desc}</CardText>
                  <Button>Detay</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}
