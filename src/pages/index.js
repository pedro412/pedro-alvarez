import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-center">Welcome 👋</h1>
      <hr></hr>
      <p className="text-center">
        Hello there, in this site you will find articles and tutorials that i
        write so i can help other developers and myself.
      </p>
      <div>
        <h2 className="text-center">Articles 📚</h2>
        <section className="section-grid">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <article key={node.id} className="list-article text-center">
              <Link to={`/${node.fields.slug}`}>
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </Link>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <Link
                to={`/${node.fields.slug}`}
                className="btn btn-warning btn-block"
              >
                READ
              </Link>
            </article>
          ))}
        </section>
      </div>

      <br></br>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
