import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Proyectos = () => {
  return (
    <Layout>
      <SEO title="Acerca" />
      <h1 className="text-center">Proyectos 👨‍💻</h1>
      <hr />
      <p>
        Aquí puedes encontrar una lista de proyectos personales y proyectos que
        he realizado para clientes:
      </p>
      <br />
      <div className="mb-2">
        <a href="https://natde.com/">
          <strong>Natde venta de uniformes:</strong>
        </a>
        <br />
        Esta aplicación esta hecha con Angular en el frontend y NodeJS en el
        backend, usa una base de datos no relacional de Google DataStore y esta
        servida con Server Side Rendering con Google Cloud Computing Engine
      </div>
      <div className="mb-2">
        <a href="http://4punto3.com/">
          <strong>4Punto3 Mezcal:</strong>
        </a>
        <br />
        Esta es una página estatica de presentación hecha con HTML, CSS y
        JavaScript.
      </div>
      <div className="mb-2">
        <a href="https://petgram.pedroalvarez412.now.sh/">
          <strong>Petgram:</strong>
        </a>
        <br />
        Este proyecto lo realize con React y esta alojado en un servicio cloud
        llamado Zeit Now
      </div>
      <div className="mb-2">
        <a href="https://pointlify.com/">
          <strong>Pointlify:</strong>
        </a>
        <br />
        Aplicación de punto de venta hecha con Angular y Firebase como backend.
      </div>
    </Layout>
  )
}

export default Proyectos
