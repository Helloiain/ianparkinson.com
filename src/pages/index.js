/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"

import Layout from "../components/Layout"

import InstagramIcon from "../images/iconmonstr-instagram-11.svg"
import TwitterIcon from "../images/iconmonstr-twitter-3.svg"
import GithubIcon from "../images/iconmonstr-github-3.svg"

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="hero">
            <h2>
              Hello, i'm <br />
              <span className="I">Ian</span>
            </h2>
            <p className="text">
              Welcome to this tiny space i've made for myself and my ideas.
              This is my first website, and although it has a ways to go, I hope you enjoy.
            </p>
            <a
              href="https://twitter.com/IanPark31931597" 
            >
              <TwitterIcon className="twitter" />
            </a>
            <a
              href="https://instagram.com/h3lloiain" 
            >
              <InstagramIcon className="instagram" />
            </a>
            <a 
              href="https://github.com/helloiain"
            >
              <GithubIcon className="github" />
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}


