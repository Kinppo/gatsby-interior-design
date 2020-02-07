import React from "react"
import Header from "../components/Header"
import PortfolioLayout from "../Layouts/PortfolioLayout"
import Seo from "../components/seo"

export default function Portfolio({ data }) {
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
      <PortfolioLayout data={data} />
    </div>
  )
}

export const query = graphql`
  query {
    allSanityProject {
      edges {
        node {
          title
          bgPath
          slug {
            current
          }
          mainImage {
            asset {
              fixed(width: 1920, height: 950) {
                ...GatsbySanityImageFixed
              }
            }
          }
          categories {
            title
          }
        }
      }
    }
  }
`
