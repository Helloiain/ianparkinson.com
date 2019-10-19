/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import config from "../../data/SiteConfig"
import SEO from "../components/seo"

import Layout from "../components/Layout"
import sassy from "../assets/images/sassy.jpg"
import algorithmvisualizer from "../assets/images/algorithmvisualizer.jpg"
import romanemperors from "../assets/images/romanemperors.jpg"

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
  }
  p {
    width: 400px;
    font-size: 1rem;
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

export default class Me extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Projects - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div>
            <ProjectContainer>
              <div>
                <img
                  className=""
                  src={algorithmvisualizer}
                  alt=""
                  width="360px"
                  height="220px"
                />
                <div className="links">
                  <a
                    href="https://github.com/Helloiain/pathfindingVisualizer"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    code source
                  </a>
                  <a
                    href="https://hardcore-lewin-89b76a.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    visit site
                  </a>
                </div>
              </div>
              <div>
                <h2>Algorithm Visualizer</h2>
                <p>
                  At its core, a pathfinding algorithm seeks to find the
                  shortest path between two points. This application visualizes
                  various pathfinding algorithms in action, and more!
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
              <div>
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
                  <Tag>Web Scraping</Tag>
                  <Tag>React</Tag>
                </div>
              </div>
              <div>
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
                    href="https://why-are-you-so-sexy.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    visit site
                  </a>
                </div>
              </div>
            </ProjectContainer>
            <ProjectContainer>
              <div>
                <img
                  className=""
                  src={sassy}
                  alt=""
                  width="360px"
                  height="220px"
                />
                <div className="links">
                  <a
                    href="https://github.com/Helloiain/reading_list"
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
              <div>
                <h2>Sassy</h2>
                <p>
                  Using hand coded HTML, CSS, and JavaScript to test out a
                  lightbox gallery effect.
                </p>
                <div>
                  <Tag>HTML</Tag>
                  <Tag>CSS</Tag>
                  <Tag>Javascript</Tag>
                  <Tag>jQuery</Tag>
                </div>
              </div>
            </ProjectContainer>
          </div>
        </div>
      </Layout>
    )
  }
}
