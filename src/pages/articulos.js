import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articulos = () => (
  <Layout>
    <SEO title="Artículos" />
    <h1 className="text-center">Artículos 📚</h1>
    <hr></hr>
    <p>
      Ademas del desarrollo me gusta escribir y enseñar las cosas que voy
      aprendiendo quiza alguno de estos artículos te enseñe algo nuevo:
    </p>

    <h3>Lorem ipsum dolor sit amet</h3>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Articulos
