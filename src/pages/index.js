import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../style/main.scss"
import Seo from "../components/seo"
import Header from "../components/Header"
import DefaultLayout from "../Layouts/DefaultLayout"

export default function IndexPage() {
  const [content, updateContent] = useState(0)
  const [type, updateType] = useState("down")

  return (
    <div>
      <Seo title="Home" />
      <div
        style={
          content === 1 && type === "down"
            ? {
                display: "none",
              }
            : {
                display: "block",
              }
        }
      >
        <Header />
      </div>
      <div
        style={
          content === 1 && type === "down"
            ? {
                position: "relative",
                opacity: 1,
                transition: "all 1s",
                transitionDelay: "0.5s",
                transform: "translateY(0px)",
              }
            : {
                opacity: 0,
                transform: "translateY(-30px)",
              }
        }
      >
        <Header />
      </div>
      <DefaultLayout updateContent={updateContent} updateType={updateType} />
    </div>
  )
}
