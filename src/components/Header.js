/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { Link } from "gatsby";

import Astrohelm from "../assets/svgs/astro-helm.svg"

export default class Header extends Component {

  render() {
    const { menuLinks } = this.props;

    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <Link to={`/`}>
              <p><Astrohelm className="logo" /><span className="hdiv">Ian Parkinson</span></p>
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