/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import config from "../../data/SiteConfig"
import SEO from "../components/seo"

import Layout from "../components/Layout"

export default class Me extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Projects - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="me-container">
              <h1>Projects</h1>
          </div>
        </div>
      </Layout>
    )
  }
}
