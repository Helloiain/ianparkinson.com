/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import config from "../../data/SiteConfig"
import SEO from "../components/seo"

import Layout from "../components/Layout"
import sassy from "../assets/images/sassy.png"
import algorithmvisualizer from "../assets/images/algorithmvisualizer.jpg"
import romanemperors from "../assets/images/romanemperors.jpg"

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
              </div>
            </ProjectContainer>
            <ProjectContainer>
              <div>
                <h2>Roman Emperors</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
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
                  <a
                    href="https://github.com/Helloiain/romanemperors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    code source
                  </a>
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
                    href="https://vibrant-poitras-e44ea7.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    visit site
                  </a>
                  <a
                    href="https://github.com/Helloiain/reading_list"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    code source
                  </a>
                </div>
              </div>
              <div>
                <h2>Sassy</h2>
                <p>
                  - Fully hand coded <strong>HTML,CSS,JS</strong>
                </p>
                <p>
                  - Sliders and gallery made with <strong>jQuery</strong>
                </p>
              </div>
            </ProjectContainer>
          </div>
        </div>
      </Layout>
    )
  }
}
