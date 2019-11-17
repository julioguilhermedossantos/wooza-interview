import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import User from "./modules/User/view/User";

function App() {
  return (
    <Container className="bgColor">
      <User></User>
    </Container>
  );
}

export default App;
