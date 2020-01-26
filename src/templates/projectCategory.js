import React from "react"
import Header from "../components/Header"
import ProjectCategoryLayout from "../Layouts/ProjectCategoryLayout"
import Seo from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"
export default function ProjectCategory({ data }) {
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
      <Seo title="About" />
      <Header />
      <ProjectCategoryLayout data={data} />
    </PageTransition>
  )
}

export const query = graphql`
  query($title: String) {
    allSanityProject(
      filter: { categories: { elemMatch: { title: { eq: $title } } } }
    ) {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
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
