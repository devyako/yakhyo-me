import React from "react";
import styled from "styled-components";
import Project from "./Project";

import Book from "../assets/book.svg";
import BurgerBuilder from "../assets/burger.svg";
import Corona from "../assets/corona.svg";

const portfolio = () => {
  return (
    <Container id="portfolio">
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          <Project
            img={Book}
            title="Online Book Store"
            description="Tools used: Reactjs, Styled Components, Redux, React-Routing, Hooks"
          />
          <Project
            img={BurgerBuilder}
            title="Burger Builder"
            description="Tools used: Reactjs, Styled Components, Redux, React-Routing, Hooks"
          />
          <Project
            img={Corona}
            title="COVID-19 Tracker"
            description="Tools used: Reactjs, Styled Components, Redux, React-Routing, Hooks"
          />
        </div>
      </div>
    </Container>
  );
};

export default portfolio;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  .portfolio {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    h2 {
      text-decoration: underline;
    }
  }

  .projects {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
