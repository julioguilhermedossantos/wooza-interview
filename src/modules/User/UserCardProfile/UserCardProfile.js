import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import SkillWidget from "../SkillWidget/SkillWidget";
import styles from "./userCardProfile.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class UserCardProfile extends Component {
  render() {
    return (
      <Card className={styles.userCardProfileMargin} style={{ width: "auto" }}>
        <Card.Img
          variant="top"
          src={
            this.props.foto
              ? this.props.foto
              : "https://via.placeholder.com/150/92c952"
          }
        />
        <Card.Body className="userProfileMinHeight">
          <Card.Title>
            {this.props.nome ? this.props.nome : "-------"}
          </Card.Title>
          <Card.Text>
            {this.props.cargo ? this.props.cargo : "-------"}
          </Card.Text>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <SkillWidget skills={this.props.skills}></SkillWidget>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}
