import React from "react";
import styled from "styled-components";
import Git from "../../assets/git.svg";

const project = (props) => {
  return (
    <Container>
      <div className="img">
        <img src={props.img} />
      </div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <div className="visit-code">
        <button>
          <a href={props.link}>Visit</a>
        </button>
        <a href={props.githubLink}>
          <img src={Git} />
        </a>
      </div>
    </Container>
  );
};

export default project;

const Container = styled.div`
  width: 250px;
  height: 310px;
  background: #ffffff;
  box-shadow: 0px 0px 7px 5px rgba(54, 49, 49, 0.25);
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 300px;
    margin-bottom: 20px;
  }
  .img {
    width: 100%;
    height: 158px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 169px;
      height: 144px;
    }
  }

  .title {
    font-size: 17px;
    font-weight: bold;
    padding: 5px;
    box-sizing: border-box;
  }

  .description {
    width: 90%;
    height: 115px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .visit-code {
    width: 90%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    button {
      cursor: pointer;
      width: 100px;
      padding: 7px;
      color: white;
      background: #3769ca;
      border-radius: 10px;
      border: transparent;
      transition: 0.5s ease-out;
      box-shadow: 10px 10px 10px rgba(55, 105, 202, 0.42);

      :hover {
        box-shadow: 10px 10px 10px rgba(55, 105, 202, 0.72);
        transition: 0.5s ease-out;
      }
      :focus {
        outline: none;
      }
      a {
        text-decoration: none;
        color: white;
      }
    }
    img {
      width: 37px;
      height: 37px;
    }
  }
`;
