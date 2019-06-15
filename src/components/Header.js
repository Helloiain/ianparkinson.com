/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { Link } from "gatsby";

import Astrohawk from "../images/astrohawk.svg"

export default class Header extends Component {

  render() {
    const { menuLinks } = this.props;

    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <Link to={`/`}>
              <p><Astrohawk className="logo" /><span className="hdiv">Ian Parkinson</span></p>
            </Link>
          </div>
          <div className="nav-list">
            {menuLinks.map(link => (
                <Link key={link.name} to={link.link} activeClassName="active">
                  <p>{link.name}</p>
                </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}