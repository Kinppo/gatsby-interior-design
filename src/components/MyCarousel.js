import React from "react"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import img1 from "../assets/img/img4.jpg"
import img2 from "../assets/img/img5.jpg"
import img3 from "../assets/img/img6.jpg"

function MyCarousel({ content, type }) {
  content === 0 && type === "up"
    ? setTimeout(() => {
        document.querySelector(".carousel").style.zIndex = "0"
      }, 1000)
    : console.log()
  const Container = styled.div`
    height: 100%;
    .carousel {
      height: 100%;
      z-index: -1;
    }
    .carousel-item {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position-x: center;
    }
    .carousel-item-1 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(${img1});
    }
    .carousel-item-2 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(${img2});
    }
    .carousel-item-3 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(${img3});
    }
    .carousel-caption {
      top: 57vh;
      text-align: left;
    }
    .carousel-inner {
      height: 100%;
    }
  `
  return (
    <Container>
      <Carousel
        className="carousel"
        controls={false}
        interval="3500"
        style={content === 0 && type === "down" ? { zIndex: "1" } : {}}
      >
        <Carousel.Item className="carousel-item carousel-item-1">
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item carousel-item-2">
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item carousel-item-3">
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default MyCarousel
