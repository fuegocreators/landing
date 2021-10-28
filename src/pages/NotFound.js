import React from "react"
import "bulma"
import { Helmet } from "react-helmet"

import "../App.css"
//import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 Not Found | Wolvesville Simulation</title>
      </Helmet>
      <div className={"container introText"}>
        <br />
        <br />

        <h1 className="is-1 title">
          <figure className="image" style={{ width: "256px", display: "inline-block", verticalAlign: "middle" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/archive/0/02/20180412131227%21Transparent_square.svg" alt="Logo" />
          </figure>
          <br />
          <span>404 Not Found</span>
        </h1>

        <p>
          The requested resource has been moved, deleted, or never existed in the first place.
          <br />
          If you came here from a link on this website, please report this bug in <a href="/discord">our Discord server.</a>
          <br />
          Sorry for any inconveniences caused.
        </p>
      </div>
    </div>
  )
}

export default NotFound
