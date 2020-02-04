import React, { useEffect } from "react"
import styled from "styled-components"
import CustomFooter from "../components/CustomFooter"
import Style from "../style/style"
import { Link } from "gatsby"
const Container = styled.div`
  width: 100%;
  color: #333;
  font-family: "Montserrat", sans-serif;
  .content {
    max-width: 1700px;
    margin: auto;
    margin-top: 120vh;
  }
  .portfolio-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
    margin-bottom: 15em;
  }
  .title {
    color: #fff;
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
    font-size: 20px;
    margin-bottom: 5em;
    font-weight: 500;
    color: #fff;
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
  .bg {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 0em;
    z-index: -1;
    background-size: cover;
    background-position: center;
  }
  .hidden-item {
    position: absolute;
    top: 50px;
  }
  .fsm {
    transition: all 0.7s;
  }
  .hidden-item-2 {
    position: absolute;
    top: 0px;
  }
  button {
    background: transparent;
  }
  .portfolio-title {
    display: flex;
    margin-top: -2em;
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
  .card-btn {
    min-width: 330px;
    width: 30vw;
    height: 380px;
    margin: 4em 0em;
    transition: all 0.8s;
    transform-origin: left bottom;
    background-size: cover;
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 48px;
    }
  }
`

function ProjectCategoryLayout({ data }) {
  var openFSM = function(target, bg) {
    var $fsmActual = document.getElementById("fsm_actual")
    $fsmActual.style.position = "absolute"
    var position = {}
    var size = {}
    var $this = document.querySelector(`.${target}`)
    position = $this.getBoundingClientRect()
    size = {
      width: window.getComputedStyle($this).width,
      height: window.getComputedStyle($this).height,
    }

    $fsmActual.style.transition = `all 1s`
    $fsmActual.style.backgroundImage = `url(${bg})`
    $fsmActual.style.position = "absolute"
    $fsmActual.style.top = position.top + "px"
    $fsmActual.style.left = position.left + "px"
    $fsmActual.style.height = size.height
    $fsmActual.style.width = size.width
    $fsmActual.style.margin = $this.style.margin

    document.querySelector(`.hidden-item-2`).scrollIntoView()

    setTimeout(function() {
      $fsmActual.innerHTML = $this.innerHTML
      var classes = $this.classList.value.split(" ")
      for (var i = 0; i < classes.length; i++) {
        $fsmActual.classList.add(classes[i])
      }
      $fsmActual.classList.add("growing")
      $fsmActual.style.height = "100vh"
      $fsmActual.style.width = "100vw"
      $fsmActual.style.top = "0"
      $fsmActual.style.left = "0"
      $fsmActual.style.margin = "0"
    }, 1)

    setTimeout(function() {
      $fsmActual.classList.remove("growing")
      $fsmActual.classList.add("full-screen")
    }, 1000)

    setTimeout(function() {
      document.querySelector(`.link-${target}`).click()
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector(`.hidden-item`)
        .scrollIntoView({ block: "start", behavior: "smooth" })
    }, 1000)
  })
  return (
    <div className="warapper">
      <Container>
        <h6 className="hidden-item-2" />
        <h6 className="hidden-item" />
        <div id="fsm_actual" />
        <div
          className="bg"
          style={{
            background: `url(${require("../assets/img/" +
              data.allSanityProject.edges[0].node.categories[0].title
                .toLowerCase()
                .replace(" ", "") +
              ".jpg")})`,
          }}
        >
          <h1
            className="title"
            data-sal="slide-up"
            data-sal-duration="1300"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {data.allSanityProject.edges[0].node.categories[0].title} Projects
          </h1>
          <h6
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="h6"
          >
            Our best work
          </h6>
        </div>
        <div className="content">
          <div className="portfolio-cards">
            {data.allSanityProject.edges.map(({ node }) => (
              <div className="fsm portfolio-card">
                <Link
                  className={`link-${node.slug.current}`}
                  to={`/${node.slug.current}`}
                />
                <button
                  className={`card-btn ${node.slug.current}`}
                  onClick={() =>
                    openFSM(node.slug.current, node.mainImage.asset.fixed.src)
                  }
                  key={node.title}
                  style={{
                    backgroundImage: `url(${node.mainImage.asset.fixed.src})`,
                  }}
                ></button>
                <div className="portfolio-title">
                  <h4>Living rooms</h4>
                  <hr />
                  <div className="wrap">
                    <p className="old">Photo</p>
                    <p className="new">View Case</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Style />
        </div>
      </Container>
      <CustomFooter />
    </div>
  )
}

export default ProjectCategoryLayout
