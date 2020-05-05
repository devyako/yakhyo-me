import React from "react";
import styled from "styled-components";
import Udemy from "../../assets/udemy.png";

const certificate = (props) => {
  return (
    <Container>
      <div className="skill-logo">
        <img src={props.img} alt="logo" />
      </div>

      <div className="description">
        <a href={props.link}>{props.description}</a>
      </div>

      <div className="udemy">
        <img src={Udemy} alt="udemy" />
      </div>
    </Container>
  );
};

export default certificate;

const Container = styled.div`
  width: 260px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 13px 13px 7px rgba(136, 136, 136, 0.4);
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 20px;
  margin: 10px;
  @media (max-width: 500px) {
    width: 300px;
  }

  .skill-logo {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
    width: 90%;
    text-align: center;
  }

  .udemy {
    img {
      width: 132px;
      height: 69px;
    }
  }
`;
