import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer"
import config from "../../data/SiteConfig";
import "../styles/main.scss"

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    )
  }
}