/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"

import Layout from "../components/Layout"

import InstagramIcon from "../assets/svgs/iconmonstr-instagram-11.svg"
import TwitterIcon from "../assets/svgs/iconmonstr-twitter-3.svg"
import GithubIcon from "../assets/svgs/iconmonstr-github-3.svg"
import MessageApp from "../components/MessageApp";

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
              I created this site as a way to share a bit about myself and document
              everything i've learned. I hope you enjoy.
            </p>
            <div className="social-media-icons">
              <a href="https://twitter.com/IanPark31931597">
                <TwitterIcon className="twitter" />
              </a>
              <a href="https://instagram.com/h3lloiain">
                <InstagramIcon className="instagram" />
              </a>
              <a href="https://github.com/helloiain">
                <GithubIcon className="github" />
              </a>
            </div>
          </div>
          <MessageApp />
        </div>
      </Layout>
    )
  }
}
