import React from 'react'

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/" style={{ width:"23%" }}>
        Clicky Game
      </a>
      <p style={{ width:"43%", color:"#fff" }}>
          Click a photo to play, but don't click the same photo more than once.
      </p>
      <ul style={{ width:"33%", listStyle:"none", color:"#fff" }}>
          <li>Current Score: {props.currentScore}</li>
          <li>Top Score: {props.topScore}</li>
      </ul>
    </nav>
  )

  export default Nav
