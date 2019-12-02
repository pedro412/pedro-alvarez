import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTwitter, FaGithub } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">Pedro Álvarez</Link>
    </div>
    <ul className="menu">
      <li className="menu-item">
        <Link className="menu-item-link" to="/articulos">
          Artículos
        </Link>
      </li>
      <li className="menu-item">
        <a className="menu-item-link" href="#">
          Proyectos
        </a>
      </li>
      <li className="menu-item">
        <Link className="menu-item-link" to="/acerca">
          Acerca de
        </Link>
      </li>
    </ul>
    <ul
      style={{
        position: "absolute",
        right: "10px",
        top: "0px",
      }}
      className="menu"
    >
      <li className="menu-item">
        <a
          className="menu-item-link"
          target="_blank"
          href="https://twitter.com/Pedro_412"
        >
          <FaTwitter size="24px" />
        </a>
      </li>
      <li className="menu-item">
        <a
          className="menu-item-link"
          target="_blank"
          href="https://github.com/pedro412"
        >
          <FaGithub size="24px" />
        </a>
      </li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
