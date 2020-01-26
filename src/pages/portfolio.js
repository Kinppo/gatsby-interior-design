import React from "react"
import Header from "../components/Header"
import PortfolioLayout from "../Layouts/PortfolioLayout"
import Seo from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"

export default function Portfolio() {
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
      <Seo title="About" />
      <Header />
      <PortfolioLayout />
    </PageTransition>
  )
}
