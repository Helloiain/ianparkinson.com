/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import config from "../../data/SiteConfig"
import SEO from "../components/seo"
import Learning from "../components/Learning"

import Layout from "../components/Layout"

export default class Me extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="me-container">
            <h1>What i'm Learning</h1>
            <Learning />
          </div>
        </div>
      </Layout>
    )
  }
}
