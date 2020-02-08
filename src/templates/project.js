import React, { Component } from "react"
import { graphql } from "gatsby"
import ProjectLayout from "../Layouts/ProjectLayout"
import Seo from "../components/seo"
import Header from "../components/Header"
export default class Project extends Component {
  constructor(props) {
    super(props)
    this.handleScrolling = this.handleScrolling.bind(this)
  }
  handleScrolling() {
    if (window.pageYOffset >= window.innerHeight) {
      document.querySelector(".header-wrapper").style.background = "#f2f2f2"
    } else {
      document.querySelector(".header-wrapper").style.background = "transparent"
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.handleScrolling, false)
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScrolling, false)
  }
  render() {
    return (
      <div>
        <Seo title="About" />
        <div
          style={{
            position: "fixed",
            top: "0",
            zIndex: 10,
            right: 0,
            width: "100vw",
            paddingBottom: "1.7rem",
            transition: "all 0.5s",
          }}
          className="header-wrapper"
        >
          <Header />
        </div>
        <ProjectLayout data={this.props.data} />
      </div>
    )
  }
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
        previous {
          title
          slug {
            current
          }
        }
      }
    }
  }
`
