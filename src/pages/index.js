import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../style/main.scss"
import Seo from "../components/seo"
import Header from "../components/Header"
import DefaultLayout from "../Layouts/DefaultLayout"
import PageTransition from "gatsby-plugin-page-transitions"

export default function IndexPage() {
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
      transitionTime={100}
    >
      <Seo title="Home" />
      <Header />
      <DefaultLayout />
    </PageTransition>
  )
}
