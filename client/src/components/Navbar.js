import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [route, setRoute] = useState(window.location.pathname)

  function getRoute(name) {
    setRoute(name)
  }

  return (
    <nav className="navbar navbar-expand-lg">

      <a className="logo" href="/">
        <img src={window.location.origin + "/img/logo.png"} alt="Logo"/>
      </a>

      <button className="navbar-toggler" data-toggle="collapse" data-target="#mobileDropdown">
        <i class="fas fa-bars"/>
      </button>
      
      <div className="collapse navbar-collapse" id="mobileDropdown">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link onClick={() => getRoute("/")} to="/" className={route === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <span className="nav-link divider"/>
          </li>

          <li className="nav-item">
            <Link onClick={() => getRoute("/about")} to="/about" className={route === "/about" ? "nav-link active" : "nav-link"}>
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <span className="nav-link divider"/>
          </li>

          <li className="nav-item">
            <Link onClick={() => getRoute("/highlights")} to="/highlights" className={route === "/highlights" ? "nav-link active" : "nav-link"}>
              Highlights
            </Link>
          </li>

          <li className="nav-item">
            <span className="nav-link divider"/>
          </li>

          <li className="nav-item">
            <Link onClick={() => getRoute("/contact")} to="/contact" className={route === "/contact" ? "nav-link active" : "nav-link"}>
              Contact Me
            </Link>
          </li>

        </ul>
      </div>

    </nav>
  )
}

export default Navbar