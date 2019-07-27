/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { Link } from "gatsby";

import Logo from "../assets/svgs/logo.svg"
import { relativeTimeThreshold } from "../../node_modules/moment/moment";

export default class Header extends Component {
  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props;

    return (
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <div className="nav-container">
          <div className="brand">
            <Link to={`/`}>
              <p><Logo className="logo" /><span className="hdiv">Ian Parkinson</span></p>
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