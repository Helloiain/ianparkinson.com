/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { Link } from "gatsby";

export default class Header extends Component {
  render() {
    const { menuLinks } = this.props;

    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <Link to={`/`}>
              <p>Ian Parkinson</p>
            </Link>
          </div>
          <div className="nav-list">
            {menuLinks.map(link => (
                <Link key={link.name} to={link.link} activeClassName="active">
                  {link.name}
                </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}