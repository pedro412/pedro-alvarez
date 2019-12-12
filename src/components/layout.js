/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Link } from "@reach/router"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main
          style={{
            marginBottom: "20px",
          }}
        >
          {children}
        </main>
        <hr />
        <footer
          style={{
            textAlign: "center",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          © {new Date().getFullYear()}, Hecho con
          {` `}
          <a target="_blank" href="https://www.gatsbyjs.org">
            Gatsby
          </a>{" "}
          por <Link to="/">Pedro Álvarez</Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
