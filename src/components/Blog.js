import React, { Component } from "react";
import styled from "styled-components";

class Blog extends Component {
  render() {
    return (
      <Container>
        <div className="title-search">
          <h1>Blog</h1>
          <div className="search">Search blogs</div>
        </div>
        <div className="container">
          <div className="blogs">
            <div className="blog-cont">
              <div className="time">Thursday, April 9th 2020 (5 days ago)</div>
              <div className="title">
                <h1>Simpler Pricing</h1>
              </div>
              <div className="article">
                Since the launch of our platform, we have always aimed to make
                our pricing model as simple as possible, and perfectly tailored
                to your needs. Today, we are taking a giant leap towards that
                goal by introducing our new pricing plans for your personal
                account and teams.
              </div>
              <div className="read-more">Read more</div>
              <hr />
            </div>

            <div className="blog-cont">
              <div className="time">Thursday, April 9th 2020 (5 days ago)</div>
              <div className="title">
                <h1>Simpler Pricing</h1>
              </div>
              <div className="article">
                Since the launch of our platform, we have always aimed to make
                our pricing model as simple as possible, and perfectly tailored
                to your needs. Today, we are taking a giant leap towards that
                goal by introducing our new pricing plans for your personal
                account and teams.
              </div>
              <div className="read-more">Read more</div>
              <hr />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;

  .title-search {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #979292;

    h1 {
      font-size: 30px;
    }

    .search {
      width: 200px;
      height: 20px;
      border: 1px solid grey;
      font-size: 15px;
      padding: 5px;
      color: grey;
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .blogs {
      margin-top: 30px;
      width: 50%;
      display: flex;
      flex-direction: column;

      .blog-cont {
        margin-bottom: 15px;
        .time {
          padding: 2px;
          color: grey;
          font-size: 14px;
        }
        .title {
          font-size: 11px;
        }
        .article {
          font-size: 14px;
        }
        .read-more {
          padding: 5px;
          font-size: 13px;
          color: #18537d;
        }
      }
    }
    .recommended-blogs {
      width: 30%;
    }
  }
`;
