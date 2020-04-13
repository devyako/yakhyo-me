import React from "react";
import styled from "styled-components";

const skill = (props) => {
  return (
    <Container>
      <div className="skill-logo">
        <img className={props.img_classname} src={props.img} />
      </div>
      <div className="description">{props.description}</div>
      <div className="confidence">
        Confidence
        <div className="circles">
          <div className={props.circle1}></div>
          <div className={props.circle2}></div>
          <div className={props.circle3}></div>
          <div className={props.circle4}></div>
          <div className={props.circle5}></div>
        </div>
      </div>
    </Container>
  );
};

export default skill;

const Container = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 10px 10px 10px rgba(176, 176, 176, 0.25);
  border-radius: 23px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 20px;
  margin: 10px;

  .skill-logo {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 89px;
      height: 89px;
      border-radius: 11px;
    }

    .node {
      width: 115px;
      height: 67px;
    }

    .mongo {
      width: 189px;
      height: 51px;
    }
  }

  .description {
    width: 90%;
    height: 130px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confidence {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 17px;

    .circles {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .blue-circle {
        width: 30px;
        height: 30px;
        background: #3769ca;
        border-radius: 100%;
        cursor: pointer;
        :hover {
          border: 3px solid white;
          box-sizing: border-box;
        }
      }

      .white-circle {
        width: 30px;
        height: 30px;
        background: #ffffff;
        border: 1px solid #3769ca;
        box-sizing: border-box;
        border-radius: 100%;
        cursor: pointer;
        :hover {
          border: 4px solid #3769ca;
          box-sizing: border-box;
        }
      }
    }
  }
`;
