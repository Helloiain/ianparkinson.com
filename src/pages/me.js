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
            <h2>About me</h2>
            <p>
              I'm Ian Parkinson a full-stack software developer based in
              Houston, Tx. Before, I worked part-time as a server at a very
              lovely resturant/theater but quickly realized I had no interest in
              doing that, and really anything similar, in any way.
            </p>
            <p>
              I've always been fascinated with the future(surprise!) not only
              how it will look but also how we'll get there. It's clear by now
              that tech is leading that way so I decided to begin teaching
              myself the fundamentals of computer science and programming and it
              was no surprise when I fell in love immediately. It appeals to my
              tendancy for logic and clarity, my love and appreciation for
              narratives, and my wonder at the curious nature of the Abstract.
            </p>
            <p>
              I created this site as a way to implement the idea of learning in
              public, which i've come to value after being inspired by
              wonderfully helpful content created by others who share that same
              value.
            </p>
          </div>
          <h3>What i'm Learning</h3>
          <Learning />
        </div>
      </Layout>
    )
  }
}
