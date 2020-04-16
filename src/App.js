import React from "react";
import styled from "styled-components";

import Navigation from "./components/UI/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Navigation to="/blogs" path="Blogs"/>
      <Home />
      <About />
      <Portfolio />
      <Contact /> 
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8f8f8;
`;
