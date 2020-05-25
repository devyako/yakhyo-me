import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

import JavaScript from "../../assets/javascript.png";
import Reactjs from "../../assets/react.png";
import Nodejs from "../../assets/node.png";
import MongoDB from "../../assets/mongodb.png";

const skills = () => {
  return (
    <Container>
      <h2>My skills</h2>
      <div className="skills">
        <Skill
          img={JavaScript}
          description="Familiar with the latest updates on the language as well as hands-on
        experience with ES6, ES7 and ES8."
          circle1="blue-circle"
          circle2="blue-circle"
          circle3="blue-circle"
          circle4="blue-circle"
        />
        <Skill
          img={Reactjs}
          img_classname="react"
          description="Familiar with the latest updates on the library as well as hands-on
        experience with hooks, redux and life-cycle methods."
          circle1="blue-circle"
          circle2="blue-circle"
          circle3="blue-circle"
          circle4="blue-circle"
          circle5="white-circle"
        />
        <Skill
          img={Nodejs}
          img_classname="node"
          description="Very comfortable with Nodejs and its core features as well as Expressjs, MVC, RestAPIs and GraphQL."
          circle1="blue-circle"
          circle2="blue-circle"
          circle3="blue-circle"
          circle4="blue-circle"
          circle5="white-circle"
          circle5="white-circle"
        />
        <Skill
          img={MongoDB}
          img_classname="mongo"
          description="Have a deep understanding and practical knowledge on CRUD operations, Schemas, Security and Drivers"
          circle1="blue-circle"
          circle2="blue-circle"
          circle3="blue-circle"
          circle5="white-circle"
          circle5="white-circle"
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`;
