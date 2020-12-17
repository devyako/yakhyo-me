import React from "react";
import styled from "styled-components";
import Navigation from "../UI/BlogNav";
import Blog from "./blog";

const Blogs = () => {
    return (
        <Container>
            <Navigation />
            <h2>Blogs</h2>
            <div className="blogs">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        </Container >
    );
};

export default Blogs;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  box-sizing: border-box; 
  
  h2 {
    width: 50%;
    margin-top: 40px;
    float: left; 
  }

  .blogs {
    margin-top: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 728px) {
      width: 70%;
    }

    @media screen and (max-width: 428px) {
      width: 90%;
    }
  
  }
`;
