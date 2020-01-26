import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import Style from "../style/style"
const Container = styled.div`
  width: 100%;
  color: #333;
  max-width: 1700px;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  .portfolio-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .title {
    margin-top: 2.3em;
  }
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  h6 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 5em;
    font-weight: 600;
  }
  .about-link {
    text-align: center;
    margin: 8em 0em;
    p {
      font-size: 14px;
      font-weight: 600;
    }
    h1 {
      color: #fff;
      transition: all 0.4s;
      line-height: 1;
      -webkit-text-stroke: 2px #333;
      &:hover {
        color: #333;
      }
    }
  }
  a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: #333;
    }
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 48px;
    }
  }
`
export default function PortfolioLayout() {
  return (
    <Container>
      <h1 className="title">PORTFOLIO</h1>
      <h6>Our best work</h6>
      <div className="portfolio-cards">
        <Link to="./kitchen" state={{ type: "Kitchens" }}>
          <ProjectCard img="img11.jpg" title="Kitchens" type="Photo" />
        </Link>
        <Link to="./bathroom" state={{ type: "Bathrooms" }}>
          <ProjectCard img="img10.jpg" title="Bathrooms" type="Design" />
        </Link>
        <Link to="./bedroom" state={{ type: "Bedrooms" }}>
          <ProjectCard img="img12.jpg" title="Bedrooms" type="Design" />
        </Link>
        <Link to="./living-room" state={{ type: "Living rooms" }}>
          <ProjectCard img="img13.jpg" title="Living rooms" type="Photo" />
        </Link>
        <Link to="./dining-room" state={{ type: "Dining Rooms" }}>
          <ProjectCard
            img="img14.jpg"
            title="Dining Rooms"
            type="Architecture"
          />
        </Link>
      </div>
      <div className="about-link">
        <p>Learn More</p>
        <Link to="./about">
          <h1>About Us</h1>
        </Link>
      </div>
      <Style />
    </Container>
  )
}
