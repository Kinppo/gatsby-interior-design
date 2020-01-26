const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            title
            slug {
              current
            }
            categories {
              title
            }
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const project = result.data.allSanityProject.edges.map(({ node }) => node)
  project.forEach(project => {
    actions.createPage({
      path: project.slug.current,
      component: path.resolve("src/templates/project.js"),
      context: {
        slug: project.slug.current,
        cat: project.categories[0].title,
      },
    })
  })

  const category = result.data.allSanityCategory.edges.map(({ node }) => node)
  category.forEach(category => {
    actions.createPage({
      path: category.slug.current,
      component: path.resolve("src/templates/projectCategory.js"),
      context: {
        title: category.title,
      },
    })
  })
}
