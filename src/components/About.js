import React from "react";
import styled from "styled-components";
import Skills from "./Skills/Skills";

const about = () => {
  return (
    <Container id="about">
      <div className="about">
        <h2>About Me</h2>
        <div className="intro">
          <div className="about-me">
            My name is Yakhyo Ismoiljonov. I am a third year computer science
            major at Sejong University. I love web and mobile application
            development so much. So far I finished different online and on
            campus courses where I learnt alot about web development.
          </div>
        </div>
      </div>
      <div className="skills">
        <Skills />
      </div>
    </Container>
  );
};

export default about;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .about {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;

    h2 {
      text-decoration: underline;
    }

    .intro {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .about-me {
        width: 50%;
        text-align: center;
      }

      .buttons {
        width: 30%;

        .blue-btn {
          background: #3769ca;
          border-radius: 7px;
          color: white;
          padding: 10px;
          border: transparent;
          margin: 5px;
        }
        .border-blue-btn {
          background: white;
          border-radius: 7px;
          color: black;
          padding: 8px;
          border: transparent;
          margin: 5px;
          border: 3px solid #3769ca;
        }
      }
    }
  }

  .skills {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
