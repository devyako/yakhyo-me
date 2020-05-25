import React from "react";
import styled from "styled-components";
import Certificate from "./Certificate";

import ReactJPG from "../../assets/react-cert.jpg";
import NodeJPG from "../../assets/node.jpg";
import MongoJPG from "../../assets/mongodb-cetf.jpg";

const certificates = () => {
  return (
    <Container>
      <h2>My achievements</h2>
      <div className="skills">
        <Certificate
          img={ReactJPG}
          description="React - The Complete Guide (incl. Hooks, React Router, Redux, Next.js)"
          link="https://www.udemy.com/certificate/UC-d3b832e7-f317-4729-8557-f632e4aff715/"
        />
        <Certificate
          img={NodeJPG}
          description="
          NodeJS - The Complete Guide (incl. Express, MVC, REST APIs, GraphQL)"
          link="https://www.udemy.com/certificate/UC-55bd18c1-e465-43f6-bec0-af022d26cc76/"
        />
        <Certificate
          img={MongoJPG}
          description="
          MongoDB - The Complete Developer's Guide"
          link="https://www.udemy.com/certificate/UC-0dcabb1d-3ea0-4a5b-bab2-c8cfc54bf65f/"
        />
      </div>
    </Container>
  );
};

export default certificates;

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
