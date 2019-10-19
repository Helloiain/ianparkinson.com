/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"

import Layout from "../components/Layout"

import Quotes from "../components/quotes"
import Arrow from "../assets/svgs/down-arrow.svg"
import TwitterIcon from "../assets/svgs/iconmonstr-twitter-1.svg"
import GithubIcon from "../assets/svgs/iconmonstr-github-1.svg"
import LinkedinIcon from "../assets/svgs/iconmonstr-linkedin-1.svg"
import Astronaut from "../assets/svgs/noun-Astronaut.svg"

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="hero">
            <h1>Hello, I'm a frontend and node.js developer.</h1>
            <p>
              I created this site as a way to share a bit about myself and
              document everything i've learned.
            </p>
            <div className="social-media-icons">
              <a href="https://twitter.com/IanPark31931597">
                <TwitterIcon className="twitter" />
              </a>
              <a href="https://github.com/helloiain">
                <GithubIcon className="github" />
              </a>
              <a href="https://www.linkedin.com/in/ian-parkinson-272318195/">
                <LinkedinIcon />
              </a>
            </div>
          </div>
          {/* <Astronaut className="astronaut" /> */}
          <Arrow className="arrow" />
          <Quotes />
          <div className="container-2">
            <div className="sub-container">
              <h2>What I Do 💻 </h2>
              <p>
                I am a full stack software engineer based in Houston, Tx. I am
                working on open-source projects, freelancing and fleshing out my
                own personal ideas.
                <br />
                <br />I mainly tinker with web and native apps in
                <strong> JavaScript</strong>, <strong>React</strong> and{" "}
                <strong>Node</strong>.
              </p>
            </div>
            <div className="sub-container">
              <h2>How I got here 🚀</h2>
              <p>
                Before I dived into the world of programming I worked as a
                server at a very lovely dine-in theater but quickly realized
                that that was not for me. So I decided to pivot and focus on
                learning software engineering. And now here I am.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="container-3">
            <p>
              I love programming and learning new things - as a result I
              frequently work on side-projects and applications to further
              increase my skills.
              <br />
              <br />
              Here is a look at some of my{" "}
              <Link to={"/projects/"}>projects</Link>.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}
