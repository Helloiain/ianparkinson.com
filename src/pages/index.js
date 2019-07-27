/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"

import Layout from "../components/Layout"

import Quotes from "../components/quotes"
import InstagramIcon from "../assets/svgs/iconmonstr-instagram-11.svg"
import TwitterIcon from "../assets/svgs/iconmonstr-twitter-3.svg"
import GithubIcon from "../assets/svgs/iconmonstr-github-3.svg"
import Astronaut from "../assets/svgs/noun-Astronaut.svg"
import Arrow from "../assets/svgs/down-arrow.svg"

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="hero">
            <h1>
              Hello, i'm <br />
              <span className="I">Ian</span>
            </h1>
            <p>
              I created this site as a way to share a bit about myself and
              document everything i've learned. I hope you enjoy.
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
          <Astronaut className="astronaut" />
          {/* <Arrow className="arrow" /> */}
          <Quotes />
          <div className="container-2">
            <div className="sub-container">
              <h2>What I Do</h2>
              <p>
                I am a full stack software engineer currently living in my moms
                basement 😭. I am working on open-source projects, freelancing
                and fleshing out my own personal ideas.
                <br />
                <br />I mainly tinker with web and native apps, mostly in
                <strong> JavaScript</strong> and <strong>React</strong>.
              </p>
            </div>
            <div className="sub-container">
              <h2>How I got here</h2>
              <p>
                Before I dived into the world of programming I worked as a
                server at a very lovely dine-in theater but quickly realized
                that that was not for me... at all.
                <br />
                <br />
                I've always been fascinated with the future (I know I know, not
                much of a surprise) not only how it will look but also how we'll
                get there.
              </p>
            </div>
          </div>
          <div className="container-4">
            <p>
              I love programming and learning new things - as a result I
              frequently work on side-projects and applications to further
              increase my skills.
              <br />
              <br />
              Here is a look at some of my <a href="">projects</a>.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}
