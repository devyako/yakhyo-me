import React from "react";
import styled from "styled-components";
import Project from "./Project";

import Book from "../../assets/book.svg";
import BurgerBuilder from "../../assets/burger.svg";
import Corona from "../../assets/corona.svg";
import Message from "../../assets/message.svg";

const portfolio = () => {
  return (
    <Container id="portfolio">

      <Project
        img={Corona}
        title="COVID-19 Tracker"
        description="Covid 19 tracker for Uzbekistan."
        link="https://www.uzkorona.info/"
        githubLink="https://github.com/yakohere/corona-uzb-live"
      />
      <Project
        img={Book}
        title="Online Book Store"
        description="Bunch of really recommended books by successful people."
        link="https://mbooks.netlify.app/"
        githubLink="https://github.com/yakohere/mybookstore"
      />
      <Project
        img={BurgerBuilder}
        title="Farshburger"
        description="A web site on which customers can see the menu of a restaurant and order a food."
        link="https://www.farshburger.biz/"
        githubLink="https://github.com/yakohere/farshburger"
      />
      <Project
        img={BurgerBuilder}
        title="Farshburger"
        description="A web site on which customers can see the menu of a restaurant and order a food."
        link="https://www.farshburger.biz/"
        githubLink="https://github.com/yakohere/farshburger"
      />
    </Container>
  );
};

export default portfolio;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #121212;
  display: flex; 
  flex-wrap: wrap;
  align-items: center; 
`;
