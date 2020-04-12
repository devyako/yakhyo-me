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
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="right-items">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default navigation;

const Container = styled.div`
  width: 100%;

  .navigation {
    width: 80%;

    .left-items {
      width: 30%;
    }

    .right-items {
      width: 20%;
    }
  }
`;
