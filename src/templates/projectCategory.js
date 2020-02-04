import React from "react"
import Header from "../components/Header"
import ProjectCategoryLayout from "../Layouts/ProjectCategoryLayout"
import Seo from "../components/seo"
export default function ProjectCategory({ data }) {
  return (
    <div>
      <Seo title="About" />
      <Header />
      <ProjectCategoryLayout data={data} />
    </div>
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
