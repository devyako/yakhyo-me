import React from "react";
import styled from "styled-components";
import Me from "../assets/me-glasses.png";
import Resume from "../Yakhyo.pdf";
import { Link as Scroll } from "react-scroll";
import { Zoom } from "react-reveal";
import Background from "../assets/background.png";

const home = () => {
  return (
    <Container id="home">
      <div className="container">
        <div className="text">

          <div className="name">I am Yakhyo</div>
          <div className="job">I am a full-stack web developer. </div>

          <div id="title-off" className="buttons">
            <Scroll to="about" smooth={true} duration={1000}>
              <button className="border-blue-btn">About me</button>
            </Scroll>
            <a href={Resume} download>
              <button className="border-blue-btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default home;

const Container = styled.div`
  width: 100%;
  height: 100vh; 
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 728px) {
      flex-direction: column;
    }

    .text {
      color: #121212;
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Poppins", sans-serif;
      text-align: center;

      @media screen and (max-width: 728px) {
        width: 90%;
      }

      .name {
        font-size: 70px;
        font-weight: bold;
      
        @media screen and (max-width: 728px) {
          font-size: 50px;
        }
        @media screen and (max-width: 428px) {
          font-size: 30px;
        }
      }

      .job {
        font-weight: 500;
        font-size: 35px;
        @media screen and (max-width: 728px) {
          font-size: 25px;
        }
        @media screen and (max-width: 428px) {
          font-size: 15px;
        }
      }
    }

    .buttons {
      width: 200px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;

        .border-blue-btn {
            font-family: "Poppins", sans-serif;
            cursor: pointer;
            background: white;
            border-radius: 7px;
            color: black;
            padding: 10px;
            border: transparent;
            border: 3px solid #3769ca;
            transition: 0.3s ease-out;
              
              @media screen and (max-width: 428px) {
                  font-size: 12px;
              }
              
              :hover {
                border-radius: 15px;
                color: #3769ca;
                transition: 0.3s ease-out;
              }
              
              :focus {
                outline: none;
              }
      }
    }
  }
`;
