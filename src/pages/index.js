import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../style/main.scss"
import Seo from "../components/seo"
import Header from "../components/Header"
import DefaultLayout from "../Layouts/DefaultLayout"

export default function IndexPage() {
  return (
    <div>
      <Seo title="Home" />
      <Header />
      <DefaultLayout />
    </div>
  )
}
