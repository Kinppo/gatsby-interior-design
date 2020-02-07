import React from "react"
import { graphql } from "gatsby"
import ProjectLayout from "../Layouts/ProjectLayout"
import Seo from "../components/seo"
import Header from "../components/Header"
export default function Project({ data }) {
  return (
    <div>
      <Seo title="About" />
      <Header />
      <ProjectLayout data={data} />
    </div>
  )
}

export const query = graphql`
  query($slug: String, $cat: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      descriptionTitle
      description
      bgPath
      mainImage {
        asset {
          fixed(height: 1080, width: 1960) {
            ...GatsbySanityImageFixed
          }
        }
      }
      image1 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      image2 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      image3 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      image4 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      image5 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      image6 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    allSanityProject(
      filter: { categories: { elemMatch: { title: { eq: $cat } } } }
    ) {
      edges {
        next {
          title
          slug {
            current
          }
        }
      }
    }
  }
`
