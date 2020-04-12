import React from "react";
import styled from "styled-components";
import Logo from "../../assets/yakhyo.png";

const navigation = () => {
  return (
    <Container>
      <div className="navigation">
        <div className="left-items">
          <ul>
            <li>
              <img src={Logo} />
            </li>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="right-items">
          <ul>
            <li>Blog</li>
            <li className="blue-btn">Contact</li>
          </ul>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "Poppins", sans-serif;

    .left-items {
      width: 55%;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-decoration: none;
        list-style: none;
        color: #919090;
      }

      img {
        width: 140px;
        height: 70px;
      }
    }

    .right-items {
      width: 20%;
      ul {
        display: flex;
        text-decoration: none;
        list-style: none;
        align-items: center;
        justify-content: space-around;
        color: #919090;

        .blue-btn {
          background: #3769ca;
          border-radius: 9px;
          color: white;
          padding: 7px;
        }
      }
    }
  }
`;
