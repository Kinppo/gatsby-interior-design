import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
const Container = styled.div`
  .portfolio-card {
    height: 380px;
    margin: 4em 2em;
  }
  .img {
    max-width: 620px;
    min-width: 330px;
    width: 30vw;
    height: 100%;
    border-radius: 2px;
    transition: all 0.6s;
    &:hover {
      transform: scale(1.01);
    }
  }
  .portfolio-title {
    display: flex;
    margin-top: 1.5em;
    margin-left: 2em;
    hr {
      background: #777;
      color: #777;
      width: 1.4em;
      margin: 0.5em 1.2em 0em 1.2em;
    }
    h4 {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 700;
    }
    p {
      font-size: 14px;
      color: #777;
      line-height: 16px;
    }
  }
  .wrap {
    height: 16px;
    overflow: hidden;
  }
  .old,
  .new {
    transition: transform 0.2s linear;
  }
  .portfolio-card:hover .old {
    transform: translateY(-1.2em);
  }
  .portfolio-card:hover .new {
    transform: translateY(-2.4em);
  }
  @media only screen and (max-width: 500px) {
    .portfolio-card {
      margin-left: 0;
      margin-right: 0;
    }
    .img {
      height: 80vw;
      &:hover {
        transform: scale(1);
      }
    }
    h1 {
      font-size: 48px;
    }
  }
`
function ProjectCard({ img, title, type, use }) {
  return (
    <Container>
      <div
        className="portfolio-card"
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        {use ? (
          <Image fluid={img.asset.fluid} alt={title} className="img" />
        ) : (
          <img
            src={require(`../assets/img/${img}`)}
            alt={title}
            className="img"
          />
        )}
        <div className="portfolio-title">
          <h4>{title}</h4>
          <hr />
          <div className="wrap">
            <p className="old">{type}</p>
            <p className="new">View Case</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProjectCard
