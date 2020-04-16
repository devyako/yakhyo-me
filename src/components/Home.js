import React from "react";
import styled from "styled-components";
import Me from "../assets/me-glasses.png";

const home = () => {
  return (
    <Container id="home">
      <div className="container">
        <div className="text">
          <div className="name">I am Yakhyo</div>
          <div className="job">
            I am Reactjs Developer with over 1 year hands on experience.
          </div>
          <div className="buttons">
            <button className="blue-btn">About me</button>
            <button className="border-blue-btn">Resume</button>
          </div>
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
        width: 70%;
        animation: mover 1s infinite alternate;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
      }
      @keyframes mover {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-20px);
        }
      }
    }

    .buttons {
      .blue-btn {
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        background: #3769ca;
        border-radius: 7px;
        color: white;
        padding: 7px;
        border: transparent;
        margin: 5px;
        border: 2px solid #3769ca;
        transition: 0.3s ease-out;
        :hover {
          background-color: white;
          color: #3769ca;
          transition: 0.3s ease-out;
        }
      }
      .border-blue-btn {
        font-family: "Poppins", sans-serif;
        cursor: pointer;
        background: white;
        border-radius: 7px;
        color: black;
        padding: 7px;
        border: transparent;
        margin: 5px;
        border: 3px solid #3769ca;
        transition: 0.3s ease-out;
        :hover {
          border-radius: 15px;
          color: #3769ca;
          transition: 0.3s ease-out;
        }
      }
    }
  }
`;
