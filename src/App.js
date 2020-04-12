import React from "react";
import Home from "./components/Home";
import Navigation from "./components/UI/Navigation";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navigation />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8f8f8;
`;
