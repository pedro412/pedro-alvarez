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
      <p>
        Hola, en este sitio encontraras artículos y tutoriales que escribo para
        ayudar a nuevos desarrolladores y a mi ya que me sirven para documentar
        lo que voy aprendiendo.
      </p>
      <div>
        <h2 className="text-center">Artículos 📚</h2>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <section key={node.id} className="section-grid">
            {console.log(node)}
            <article className="list-article text-center">
              <a href="#">
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </a>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <a href="#" className="btn btn-warning btn-block">
                LEER
              </a>
            </article>
          </section>
        ))}
      </div>

      <br></br>
      <Link to="/articulos/">Go to page 2</Link>
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
        }
      }
    }
  }
`

export default IndexPage
