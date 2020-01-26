import React from "react"
import Header from "../components/Header"
import ContactLayout from "../Layouts/ContactLayout"
import styled from "styled-components"
import PageTransition from "gatsby-plugin-page-transitions"

const Container = styled.div`
  width: 99vw;
  margin-left: 1vw;
  @media only screen and (max-width: 766px) {
    width: 100%;
    margin: 0;
  }
`
const contact = () => {
  return (
    <PageTransition
      defaultStyle={{
        transition: "left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
        left: "100%",
        position: "absolute",
        width: "100%",
      }}
      transitionStyles={{
        entering: { left: "0%" },
        entered: { left: "0%" },
        exiting: { left: "100%" },
      }}
      transitionTime={1000}
    >
      <Container>
        <Header />
        <ContactLayout />
      </Container>
    </PageTransition>
  )
}

export default contact
