import React from "react";
import styled from "styled-components";
import Logo from "../../assets/yakhyo.png";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <Container>
      <div className="navigation">
        <div className="left-items">
          <img src={Logo} />
        </div>
        <div className="right-items">
          <Link to="/" className="blue-btn">
            Home
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default navigation;

const Container = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: white;
  border-bottom: 1px solid #727272;

  .navigation {
    width: 80%;
    height: 90px;
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .left-items {
      width: 20%;

      img {
        width: 140px;
        height: 70px;
      }
    }

    .right-items {
      width: 5%;

      .blue-btn {
        text-decoration: none;
        background: #3769ca;
        border-radius: 9px;
        color: white;
        padding: 5px;
        cursor: pointer;
        border: 2px solid #3769ca;
        :hover {
          background-color: white;
          color: #3769ca;
        }
      }
    }
  }
`;
