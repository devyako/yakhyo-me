import React from "react";
import styled from "styled-components";

import Navigation from "./components/UI/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Navigation to="/blogs" path="Blogs" />

      <Home />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8f8f8;
`;
