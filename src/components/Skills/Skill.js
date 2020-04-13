import React from "react";
import styled from "styled-components";

const skill = (props) => {
  return (
    <Container>
      <div className="skill-logo">
        <img src={props.img} />
      </div>
      <div className="description">{props.description}</div>
      <div className="confidence">
        Confidence
        <div className="circles">
          <div className={props.circle}></div>
          <div className={props.circle}></div>
          <div className={props.circle}></div>
          <div className={props.circle}></div>
          <div className={props.circle}></div>
        </div>
      </div>
    </Container>
  );
};

export default skill;

const Container = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 10px 10px 10px rgba(176, 176, 176, 0.25);
  border-radius: 23px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 20px;

  .skill-logo {
    width: 100%;
    height: 100px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 89px;
      height: 89px;
      border-radius: 11px;
    }
  }

  .description {
    width: 90%;
    height: 130px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: yellow;
  }

  .confidence {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    .circles {
      display: flex;
      align-items: center;
      justify-content: center;

      .blue-circle {
        width: 38px;
        height: 35px;
        background: #3769ca;
        border-radius: 100%;
      }

      .white-circle {
        width: 38px;
        height: 35px;
        background: #ffffff;
        border: 1px solid #3769ca;
        box-sizing: border-box;
        border-radius: 100%;
      }
    }
  }
`;
