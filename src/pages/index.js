/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"
import styled from "styled-components"

import Layout from "../components/Layout"

import Arrow from "../assets/svgs/down-arrow.svg"
import TwitterIcon from "../assets/svgs/iconmonstr-twitter-1.svg"
import GithubIcon from "../assets/svgs/iconmonstr-github-1.svg"
import LinkedinIcon from "../assets/svgs/iconmonstr-linkedin-1.svg"
import creditCardForm from "../assets/images/creditCardForm.png"
import apexTracker from "../assets/images/apexTracker.png"
import romanemperors from "../assets/images/romanemperors.png"

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 60px;
  padding-bottom: 60px;
  text-align: center;
  align-items: center;
  img {
    margin: 45px 0 0 0;
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
  }
  .links {
    display: flex;
    justify-content: space-between;
    max-width: 360px;
    margin: 0 auto;
  }
  p {
    width: 400px;
    font-size: 1rem;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    .a {
      order: 1;
    }
    .b {
      order: 2;
    }
    .links {
      margin-bottom: 1rem;
    }
  }
`

const Tag = styled.span`
  display: inline-block;
  background-color: #363636;
  color: #fff;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 2px
  min-width: 50px;
  font-size: 14px;
`

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="hero">
            <h1>Hello, I'm a frontend and node.js developer</h1>
            <p>
              I mainly tinker with web and native apps in{" "}
              <strong> javascript</strong>, <strong>react</strong> and{" "}
              <strong>node.js</strong>
              <br />
              Here is a look at some of my <Link to={"#top"}>projects</Link>
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
          <Arrow className="arrow" />
          {/* <Quotes /> */}
          <a name="top"></a>
          <br />
          <div className="container">
            <div>
              <ProjectContainer>
                <div className="a">
                  <img
                    className=""
                    src={creditCardForm}
                    alt=""
                    width="360px"
                    height="220px"
                  />
                  <div className="links">
                    <a
                      href="https://github.com/Helloiain/credit-card-form"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      code source
                    </a>
                    <a
                      href="https://eager-albattani-24fdc1.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      visit site
                    </a>
                  </div>
                </div>
                <div className="b">
                  <h2>Credit Card Form</h2>
                  <p>
                    A credit card form with number formatting, form handling and
                    validation.
                  </p>
                  <div>
                    <Tag>HTML</Tag>
                    <Tag>CSS</Tag>
                    <Tag>Javascript</Tag>
                    <Tag>React</Tag>
                  </div>
                </div>
              </ProjectContainer>
              <ProjectContainer>
                <div className="b">
                  <h2>History of Roman Emperors</h2>
                  <p>
                    This was a passion project of mine where I wanted a pleasant
                    and intuitive way to view the history of Rome through its
                    emperors.
                  </p>
                  <div>
                    <Tag>HTML</Tag>
                    <Tag>CSS</Tag>
                    <Tag>Javascript</Tag>
                    <Tag>JSON</Tag>
                    <Tag>Python</Tag>
                    <Tag>Scrapy</Tag>
                    <Tag>React</Tag>
                  </div>
                </div>
                <div className="a">
                  <img
                    className=""
                    src={romanemperors}
                    alt=""
                    width="360px"
                    height="220px"
                  />
                  <div className="links">
                    <div>
                      <a
                        href="https://github.com/Helloiain/romanemperors"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        code source{" "}
                      </a>
                      <a
                        href="https://github.com/Helloiain/wiki-web-scraper"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        | web scraper
                      </a>
                    </div>
                    <a
                      href="https://romanemperors.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      visit site
                    </a>
                  </div>
                </div>
              </ProjectContainer>
              <ProjectContainer>
                <div className="a">
                  <img
                    className=""
                    src={apexTracker}
                    alt=""
                    width="360px"
                    height="220px"
                  />
                  <div className="links">
                    <a
                      href="https://github.com/Helloiain/sassypants"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      code source
                    </a>
                    <a
                      href="https://vibrant-poitras-e44ea7.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      visit site
                    </a>
                  </div>
                </div>
                <div className="b">
                  <h2>Apex Tracker</h2>
                  <p>
                    Using the tracker.gg api, this app finds real-time stats of
                    apex legends players on all platforms.
                  </p>
                  <div>
                    <Tag>HTML</Tag>
                    <Tag>CSS</Tag>
                    <Tag>Express.js</Tag>
                    <Tag>Javascript</Tag>
                    <Tag>React</Tag>
                    <Tag>React-Router</Tag>
                  </div>
                </div>
              </ProjectContainer>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
