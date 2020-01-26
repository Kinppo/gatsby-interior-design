import React from "react"
import { graphql } from "gatsby"
import ProjectLayout from "../Layouts/ProjectLayout"
import Seo from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"
export default function Project({ data }) {
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
      <ProjectLayout data={data} />
    </PageTransition>
  )
}

export const query = graphql`
  query($slug: String, $cat: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      descriptionTitle
      description
      mainImage {
        asset {
          fixed(height: 1080, width: 1940) {
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
