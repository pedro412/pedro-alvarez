import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import io from "../images/io.jpg"

const Acerca = () => (
  <Layout>
    <SEO title="Acerca" />
    <h1 className="text-center">Hola!</h1>
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
      Mi nombre es Pedro soy desarrollador web con más de 3 años de experiencia,
      actualmente trabajo remotamente para una empresa de software.
    </p>
    <p>
      Tambien trabajo por contratos, si te interesa contactarme me puedes enviar
      un correo o DM por Twitter.
    </p>
    <p>Algunas de las tecnologias con las que trabajo:</p>
    <ul>
      <li>JavaScript</li>
      <li>NodeJS</li>
      <li>C#/.NET</li>
      <li>Angular</li>
      <li>React</li>
    </ul>
    <p>Te invito a conocer mi portafolio de proyectos:</p>
    <button className="btn btn-primary">PROYECTOS</button>
  </Layout>
)

export default Acerca
