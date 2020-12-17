import React from "react";
import styled from "styled-components";
import Git from "../../assets/git.svg";

const project = (props) => {
  return (
    <Container>
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <section>
          <button>
            <a href={props.link}>Visit</a>
          </button>
          <a href={props.githubLink}>
            <img src={Git} />
          </a>
        </section>
      </div>



      <div className="screenshots">
        {/* <img src={props.img} /> */}

        <iframe src="https://uzkorona.info" width="99%" height="385px" />
      </div>
    </Container>
  );
};

export default project;

const Container = styled.div`
  width: 50%;
  height: 400px;
  border: 5px solid #121212;
  background: #ffffff;  
  display: flex; 
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;

  .info { 
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 
  section { 
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


  .screenshots{
      width: 60%;  

      img {
        width: 100px;
      }
  }
`;
