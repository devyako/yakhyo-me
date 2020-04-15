import React from "react";
import styled from "styled-components";

import Navigation from "./components/UI/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <Container>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Blog />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8f8f8;
`;
