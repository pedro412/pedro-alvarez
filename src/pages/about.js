import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import io from "../images/io.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="text-center">Hello 👨</h1>
    <hr />
    <div className="text-center">
      <img
        style={{
          borderRadius: "50%",
          maxWidth: "190px",
        }}
        src={io}
      ></img>
    </div>
    <p>
      Im a software developer with 4 years of experience, currently im working
      remotely on a software company.
    </p>
    <p>
      Also i have been working as a freelance and contracts, if you are
      interested in reaching me for work or help please send me a DM on Twitter or just send me
      an email.
    </p>
    <p>
      I can help you with almost anything related to web developement, apps or software in general.
    </p>
    <p>Some of the technologies i work with:</p>
    <ul>
      <li>JavaScript</li>
      <li>NodeJS</li>
      <li>C#/.NET</li>
      <li>Angular</li>
      <li>React</li>
      <li>Python</li>
    </ul>
    <p>Take a look at my latest works:</p>
    <Link to="/projects" className="btn btn-primary">
      PROJECTS
    </Link>
  </Layout>
)

export default About
