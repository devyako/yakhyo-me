import React from "react";
import styled from "styled-components";

import Navigation from "./components/UI/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Container>
      <Navigation />
      <Home />
      <About />
      <Portfolio/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8f8f8;
`;
