import { Link } from "react-router-dom";

import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to='/'>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/grouped-team-members'>Team Members</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav