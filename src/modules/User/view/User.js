import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import { getUsersAction } from "../redux/action";

import UserCardProfile from "../UserCardProfile/UserCardProfile";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // const service = new UserService();
    // service
    //   .getUsers("/assets/users.json")
    //   .then(data => this.setState({ users: data }));
    this.props.getUser();
  }

  renderUserItem = () => {
    const { users } = this.props;
    return users.map((u, i) => (
      <Col key={i} xs={12} sm={12} md={4} lg={4}>
        <UserCardProfile
          nome={u.nome}
          cargo={u.cargo}
          foto={u.foto}
          skills={u.skills}
        />
      </Col>
    ));
  };

  renderNoUsersFoundMsg = () => (
    <Col
      xs={12}
      sm={12}
      md={4}
      lg={4}
      style={{ minWidth: "100%", minHeight: "100vh" }}
    >
      <Alert variant="info">Oops! Não encontrei ninguém =,[</Alert>
    </Col>
  );

  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <Row>
        {users && users.length
          ? this.renderUserItem()
          : this.renderNoUsersFoundMsg()}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUsersAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
