import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <div className="container">
          
          <div className="blog">
            <div className="blog-cont">
              <div className="time">Thursday, April 9th 2020 (5 days ago)</div>
              <div className="title">Simpler Pricing</div>
              <div className="article">
                Since the launch of our platform, we have always aimed to make
                our pricing model as simple as possible, and perfectly tailored
                to your needs. Today, we are taking a giant leap towards that
                goal by introducing our new pricing plans for your personal
                account and teams.
              </div>
            </div>
          </div>
          <div className="recommended-blogs">
            <h2>Recommended Posts</h2>
            <ul>
              <li>Simpler Test</li>
              <li>Simpler Test</li>
              <li>Simpler Test</li>
              <li>Simpler Test</li>
              <li>Simpler Test</li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default Blog;

const Container = styled.div`
  width: 100%;
`;
