import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className="text-center">Projects 👨‍💻</h1>
      <hr />
      <p>
        Here you can find a list of professional and personal projects that i
        have done or collaborated:
      </p>
      <br />
      <div className="mb-2">
        <a href="https://natde.com/">
          <strong>Natde uniforms:</strong>
        </a>
        <br />
        This app was made with Angular on the frontend and NodeJS as the
        backend, it uses a No SQL database called DataStore from Google and is
        server side rendered for performance.
      </div>
      <div className="mb-2">
        <a href="http://4punto3.com/">
          <strong>4Punto3 Mezcal:</strong>
        </a>
        <br />
        This is a static site build with only HTML, CSS and JavaScript.
      </div>
      <div className="mb-2">
        <a href="https://petgram.pedroalvarez412.now.sh/">
          <strong>Petgram:</strong>
        </a>
        <br />
        This project was made with ReactJS and it is hosted on a cloud service called ZEIT by Now.
      </div>
      <div className="mb-2">
        <a href="https://pointlify.com/">
          <strong>Pointlify:</strong>
        </a>
        <br />
        Point of sale application built with Angular and Firebase, OAuth and realtime database Firestore.
      </div>
    </Layout>
  )
}

export default Projects
