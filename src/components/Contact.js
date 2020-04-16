import React from "react";
import styled from "styled-components";
import ContactPic from "../assets/contact.svg";

import Facebook from "../assets/facebook.png";
import LinkedIn from "../assets/linkedin.png";
import Git from "../assets/git.svg";
import Gmail from "../assets/gmail.png";

const contact = () => {
  return (
    <Container id="contact">
      <div className="contact">
        <div className="connect-me">
          <div className="text">CONTACT OR CONNECT ME</div>
          <div className="logos">
            <img src={LinkedIn} className="linkedin" />
            <img className="gmail" src={Gmail} />
            <img className="facebook" src={Facebook} />
            <img className="git" src={Git} />
          </div>
        </div>
        <div className="img">
          <img src={ContactPic} />
        </div>
      </div>
    </Container>
  );
};

export default contact;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contact {
    width: 90%;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .connect-me {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .text {
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 45px;
        color: #38a6e4;
      }

      .logos {
        width: 80%;
        align-items: center;
        display: flex;
        justify-content: space-around;
        padding: 20px;
        box-sizing: border-box;

        .linkedin {
          width: 132px;
          height: 70px;
        }
        .gmail {
          width: 53px;
          height: 53px;
        }

        .facebook {
          width: 125px;
          height: 47px;
        }

        .git {
          width: 56px;
          height: 56px;
        }
      }
    }

    .img {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
`;
