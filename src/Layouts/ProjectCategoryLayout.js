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
    text-align: center;
    text-transform: uppercase;
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
function ProjectTypeLayout({ data }) {
  return (
    <Container>
      <h1 className="title">
        {data.allSanityProject.edges[0].node.categories[0].title} Projects
      </h1>
      <h6>Our best work</h6>
      <div className="portfolio-cards">
        {data.allSanityProject.edges.map(({ node }) => (
          <Link to={node.slug.current} key={node.title}>
            <ProjectCard
              img={node.mainImage}
              title={node.title}
              type="Photo"
              use={true}
            />
          </Link>
        ))}
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

export default ProjectTypeLayout
