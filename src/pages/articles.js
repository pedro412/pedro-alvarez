import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = () => (
  <Layout>
    <SEO title="Articles" />
    <h1 className="text-center">Articles 📚</h1>
    <hr></hr>
    <p>
      In addition to development I like to write and teach the things i learn
      so i hope one of these articles will teach you something new:
    </p>

    <h3>Work in progress...</h3>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Articles
