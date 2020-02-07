import React from "react"
import Header from "../components/Header"
import PortfolioLayout from "../Layouts/PortfolioLayout"
import Seo from "../components/seo"

export default function Portfolio() {
  return (
    <div>
      <Seo title="About" />
      <div
        style={{
          position: "absolute",
          top: "0",
          zIndex: 10,
          right: 0,
        }}
      >
        <Header />
      </div>
      <PortfolioLayout />
    </div>
  )
}
