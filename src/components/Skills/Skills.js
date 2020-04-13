import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import JavaScript from "../../assets/javascript.png";

const skills = (props) => {
  return (
    <Container>
      <div className="skills">
        <Skill
          img={JavaScript}
          description="Familiar with the latest updates on the language as well as hands-on
        experience with ES6, ES7 and ES8."
        
        />
      </div>
    </Container>
  );
};

export default skills;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .skills {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
