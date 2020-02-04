import React from "react"
import styled from "styled-components"
import img1 from "../assets/img/kitchen.jpg"
import img2 from "../assets/img/bathroom.jpg"
import img3 from "../assets/img/bedroom.jpg"
import img4 from "../assets/img/livingroom.jpg"
import img5 from "../assets/img/diningroom.jpg"
import Style from "../style/style"
import CustomFooter from "../components/CustomFooter"
import { Link } from "gatsby"
const Container = styled.div`
  width: 100%;
  color: #333;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 10em;
  .portfolio-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
  }
  .title {
    margin-top: 3em;
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
  .card-btn-1 {
    background-image: url(${img1});
  }
  .card-btn-2 {
    background-image: url(${img2});
  }
  .card-btn-3 {
    background-image: url(${img3});
  }
  .card-btn-4 {
    background-image: url(${img4});
  }
  .card-btn-5 {
    background-image: url(${img5});
  }
  .fsm {
    transition: all 1s;
  }
  .hidden-item {
    position: absolute;
    top: 0px;
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 48px;
    }
  }
`
export default function PortfolioLayout() {
  var openFSM = function(target, loc, number) {
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
    $fsmActual.style.backgroundImage = `url(${number})`
    $fsmActual.style.position = "absolute"
    $fsmActual.style.top = position.top + "px"
    $fsmActual.style.left = position.left + "px"
    $fsmActual.style.height = size.height
    $fsmActual.style.width = size.width
    $fsmActual.style.margin = $this.style.margin

    document.querySelector(`.hidden-item`).scrollIntoView()

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
      document.querySelector(`.${loc}`).click()
    }, 1000)
  }

  return (
    <div className="warapper">
      <Container className="myContainer">
        <h6 className="hidden-item"></h6>
        <div id="fsm_actual" />
        <h1 className="title">PORTFOLIO</h1>
        <h6>Our best work</h6>
        <div className="portfolio-cards">
          <div className="fsm portfolio-card">
            <Link className="link-1" to="./kitchen" />
            <button
              className="card-btn card-btn-1"
              onClick={() => openFSM("card-btn-1", "link-1", img1)}
            ></button>
            <div className="portfolio-title">
              <h4>Kitchens</h4>
              <hr />
              <div className="wrap">
                <p className="old">Photo</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
          <div className="fsm portfolio-card">
            <Link className="link-2" to="./bathroom" />
            <button
              className="card-btn card-btn-2"
              onClick={() => openFSM("card-btn-2", "link-2", img2)}
            ></button>
            <div className="portfolio-title">
              <h4>Bathrooms</h4>
              <hr />
              <div className="wrap">
                <p className="old">Photo</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
          <div className="fsm portfolio-card">
            <Link className="link-3" to="./bedroom" />
            <button
              className="card-btn card-btn-3"
              onClick={() => openFSM("card-btn-3", "link-3", img3)}
            ></button>

            <div className="portfolio-title">
              <h4>Bedrooms</h4>
              <hr />
              <div className="wrap">
                <p className="old">Design</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
          <div className="fsm portfolio-card">
            <Link className="link-4" to="./living-room" />
            <button
              className="card-btn card-btn-4"
              onClick={() => openFSM("card-btn-4", "link-4", img4)}
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
          <div className="fsm portfolio-card">
            <Link className="link-5" to="./dining-room" />
            <button
              className="card-btn card-btn-5"
              onClick={() => openFSM("card-btn-5", "link-5", img5)}
            ></button>

            <div className="portfolio-title">
              <h4>Dining rooms</h4>
              <hr />
              <div className="wrap">
                <p className="old">Design</p>
                <p className="new">View Case</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Style />
      <CustomFooter />
    </div>
  )
}
