import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <h1 className="text-center">Bienvenido 👋</h1>
      <hr></hr>
      <p className="text-center">
        Hola, en este sitio encontraras artículos y tutoriales que escribo para
        ayudar a nuevos desarrolladores y a mi ya que me sirven para documentar
        lo que voy aprendiendo.
      </p>
      <div>
        <h2 className="text-center">Artículos 📚</h2>
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
                LEER
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
