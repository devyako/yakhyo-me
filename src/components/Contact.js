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
            <a href="https://www.linkedin.com/in/yako-ism/">
              <img src={LinkedIn} className="linkedin" alt="img" />
            </a>
            <a href="mailto:yakhyoismoildjonov@gmail.com">
              <img className="gmail" src={Gmail} alt="img" />
            </a>
            <a href="https://www.facebook.com/yakohere/">
              <img className="facebook" src={Facebook} alt="img" />
            </a>
            <a href="https://github.com/yakohere">
              <img className="git" src={Git} alt="img" />
            </a>
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

  padding-top: 150px;
  box-sizing: border-box;

  .contact {
    width: 90%;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 428px) {
      width: 100%;
      padding: 10px;
    }

    .connect-me {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 428px) {
        width: 100%;
      }
      .text {
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 45px;
        color: #38a6e4;
        @media screen and (max-width: 428px) {
          font-size: 20px;
          font-weight: 600;
        }
      }

      .logos {
        width: 80%;
        align-items: center;
        display: flex;
        justify-content: space-around;
        padding: 20px;
        box-sizing: border-box;
        @media screen and (max-width: 428px) {
          flex-direction: column;
        }

        .linkedin {
          width: 132px;
          height: 70px;
          @media screen and (max-width: 428px) {
            width: 102px;
            height: 55px;
          }
        }
        .gmail {
          width: 53px;
          height: 53px;
          @media screen and (max-width: 428px) {
            width: 33px;
            height: 33px;
          }
        }

        .facebook {
          width: 125px;
          height: 47px;
          @media screen and (max-width: 428px) {
            width: 105px;
            height: 37px;
          }
        }

        .git {
          width: 56px;
          height: 56px;
          @media screen and (max-width: 428px) {
            width: 46px;
            height: 46px;
          }
        }
      }
    }

    .img {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 50%;
        @media screen and (max-width: 428px) {
          width: 100%;
        }
      }
    }
  }
`;
