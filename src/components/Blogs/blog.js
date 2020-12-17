import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "../UI/BlogNav";

const Blog = () => {
  return (
    <Container>
      <h1>Simpler Pricing</h1>
      <div className="time">Thursday, April 9th 2020 (5 days ago)</div>
      <div className="article">
        Since the launch of our platform, we have always aimed to make our
        pricing model as simple as possible, and perfectly tailored to your
        needs. Today, we are taking a giant leap towards that goal by
        introducing our new pricing plans for your personal account and
        teams.
          </div>
      <div className="read-more">Read more...</div>
    </Container>
  );
};

export default Blog;

const Container = styled.div`
  width: 100%;
  margin-bottom: 15px; 

  .time {
    margin: 5px 0;
    color: grey;
    font-size: 14px; 
  }
  
  h1 {
    margin: 5px 0;
    font-size: 21px; 
  }

  .article {
    font-size: 14px;
    color: #343333;
  }

  .read-more {
    margin: 5px 0;
    font-size: 13px;
    color: #18537d;
  }
`;
