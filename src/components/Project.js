import React from "react";
import styled from "styled-components";
import Git from "../assets/git.svg";

const project = (props) => {
  return (
    <Container>
      <div className="img">
        <img src={props.img} />
      </div>
      <div className="description">{props.description}</div>
      <div className="visit-code">
        <button>Visit</button>
        <img src={Git} />
      </div>
    </Container>
  );
};

export default project;

const Container = styled.div`
  width: 387px;
  height: 350px;
  background: #ffffff;
  box-shadow: 10px 10px 10px rgba(176, 176, 176, 0.25);
  border-radius: 23px;

  .img {
    width: 100%;
    height: 158px;

    img {
      width: 169px;
      height: 144px;
    }
  }

  .description {
    width: 100%;
    height: 115px;
  }

  .visit-code {
    display: flex;
    
    button {
      width: 150px;
      background: #3769ca;
      border-radius: 10px;
      border: transparent;
    }
    img {
      width: 47px;
      height: 47px;
    }
  }
`;
