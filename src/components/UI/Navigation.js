import React from "react";
import styled from "styled-components";
import Logo from "../../assets/yakhyo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const navigation = () => {
  return (
    <Container>
      <div className="navigation">
        <div className="left-items">
          <ul>
            <li>
              <img src={Logo} />
            </li>
            <ScrollLink to="home" smooth={true} duration={1000}>
              <li className="off">Home</li>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={1000}>
              <li className="off">About</li>
            </ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={1000}>
              <li className="off">Portfolio</li>
            </ScrollLink>
          </ul>
        </div>
        <div className="right-items">
          <ul>
            <Link to="/blogs">
              <li className="off">Blog</li>
            </Link>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="blue-btn"
            >
              Contact
            </ScrollLink>
            <Link to="blogs" className="blue-btn-blog">
              Blogs
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default navigation;

const Container = styled.div`
  width: 100%;
  top: 0px;
  position: fixed;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: white;
  vertical-align: middle;
  border-bottom: 1px solid #727272;
  @media screen and (max-width: 428px) {
    height: 60px;
  }

  .navigation {
    width: 80%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "Poppins", sans-serif;
    @media screen and (max-width: 428px) {
      height: 60px;
    }

    .off {
      @media screen and (max-width: 428px) {
        display: none;
      }
    }

    .left-items {
      width: 55%;
      @media screen and (max-width: 428px) {
        width: 50%;
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-decoration: none;
        list-style: none;
        color: #919090;
        a {
          color: #919090;
          text-decoration: none;
        }
        li {
          cursor: pointer;
          transition: 0.3s ease-out;
          :hover {
            color: black;
            transition: 0.3s ease-out;
          }
        }
      }

      img {
        width: 140px;
        height: 70px;
        @media screen and (max-width: 428px) {
          width: 110px;
          height: 55px;
        }
      }
    }

    .right-items {
      width: 20%;
      @media screen and (max-width: 428px) {
        width: 50%;
      }
      ul {
        display: flex;
        text-decoration: none;
        list-style: none;
        align-items: center;
        justify-content: space-around;

        a {
          text-decoration: none;
          color: #919090;
          li {
            cursor: pointer;
            transition: 0.3s ease-out;
            :hover {
              color: black;
              transition: 0.3s ease-out;
            }
          }
        }

        .blue-btn {
          background: #3769ca;
          border-radius: 9px;
          color: white;
          padding: 5px;
          cursor: pointer;
          border: 2px solid #3769ca;
          @media screen and (max-width: 428px) {
            display: none;
          }
          :hover {
            background-color: white;
            color: #3769ca;
          }
        }
        .blue-btn-blog {
          background: white;
          border-radius: 9px;
          color: #3769ca;
          padding: 5px;
          cursor: pointer;
          border: 2px solid #3769ca;
          transition: 0.3s ease;
          @media screen and (min-width: 428px) {
            display: none;
          }
          :hover {
            border-radius: 20px;
            transition: 0.3s ease;
            color: #3769ca;
          }
        }
      }
    }
  }
`;
