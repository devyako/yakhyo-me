import React from "react";
import styled from "styled-components";
import Me from "../assets/me.png";

const home = () => {
  return (
    <Container>
      <div className="container">
        <div className="text">
          <div className="name">I am Yakhyo</div>
          <div className="job">
            I am Reactjs Developer with over 1 year hands on experience.
          </div>
          <div className="buttons"></div>
        </div>
        <div className="img">
          <img src={Me} />
        </div>
      </div>
    </Container>
  );
};

export default home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .text {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Poppins", sans-serif;
      text-align: center;
      .name {
        font-size: 70px;
        font-weight: bold;
      }
      .job {
        font-weight: 500;
        font-size: 35px;
      }
    }
    .img {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
        box-shadow: 10px 10px 10px rgba(199, 188, 188, 0.25);
        border-radius: 46px;
        border: 1px solid grey;
      }
    }
  }
`;
