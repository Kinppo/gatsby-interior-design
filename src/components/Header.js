import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Hamburger from "./elements/Hamburger"
import SideBar from "./SideBar"
const Container = styled.div`
  ul {
    margin: 32px 32px 0em 0em;
  }
  a {
    color: ${props => (props.color ? props.color : "#836755")};
    padding: 0px;
    font-size: 18px;
    margin: 0em 32px;
    border-bottom: 1px solid transparent;
    transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-delay: 0s;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    &:hover {
      border-bottom: 1px solid #b89b89;
    }
  }
  .hamburger-item {
    display: none;
  }
  .open-sideBar {
    background: transparent;
    outline: none;
    border: none;
  }
  @media only screen and (max-width: 650px) {
    .hamburger-item {
      display: block;
    }
    .nav-item {
      display: none;
    }
  }
`

const Header = ({ color }) => {
  const [SideBarIsActive, toggleSideBar] = useState(false)
  const openSideBar = () => {
    toggleSideBar(true)
  }
  return (
    <Container className="container-fluid header" color={color}>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./portfolio">
            Works
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./contact">
            Contact
          </Link>
        </li>
        <li className="hamburger-item">
          <button className="open-sideBar" onClick={() => openSideBar()}>
            <Hamburger />
          </button>
        </li>
      </ul>
      <SideBar
        toggleSideBar={toggleSideBar}
        SideBarIsActive={SideBarIsActive}
      />
    </Container>
  )
}

export default Header
