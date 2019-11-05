/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"
import styled from "styled-components"

import Layout from "../components/Layout"

import Quotes from "../components/quotes"
import Arrow from "../assets/svgs/down-arrow.svg"
import TwitterIcon from "../assets/svgs/iconmonstr-twitter-1.svg"
import GithubIcon from "../assets/svgs/iconmonstr-github-1.svg"
import LinkedinIcon from "../assets/svgs/iconmonstr-linkedin-1.svg"
import Astronaut from "../assets/svgs/noun-Astronaut.svg"
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
    max-width: 360px;
    margin: 0 auto;
  }
  p {
    width: 400px;
    font-size: 1rem;
  }
  @media (max-width: 600px) {
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
            <h1>Hello, I'm a frontend and node.js developer.</h1>
            <p>
              I mainly tinker with web and native apps in{" "}
              <strong> javascript</strong>, <strong>react</strong> and{" "}
              <strong>node.js</strong>.
              <br />
              Here is a look at some of my <Link to={"#top"}>projects</Link>.
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
                <div className="b">
                  <h2>Algorithm Visualizer</h2>
                  <p>
                    At its core, a pathfinding algorithm seeks to find the
                    shortest path between two points. This application
                    visualizes various pathfinding algorithms in action, and
                    more!
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
                    <Tag>Web Scraping</Tag>
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
                <div className="a">
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
                <div className="b">
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
        </div>
      </Layout>
    )
  }
}

// <div className="container-2">
//           <div className="sub-container">
//             <h2>What I Do 💻 </h2>
//             <p>
//               I am a full stack software engineer based in Houston, Tx. I am
//               working on open-source projects, freelancing and fleshing out my
//               own personal ideas.
//               <br />
//               <br />I mainly tinker with web and native apps in
//               <strong> JavaScript</strong>, <strong>React</strong> and{" "}
//               <strong>Node</strong>.
//             </p>
//           </div>
//           <div className="sub-container">
//             <h2>How I got here 🚀</h2>
//             <p>
//               Before I dived into the world of programming I worked as a
//               server at a very lovely dine-in theater but quickly realized
//               that that was not for me. So I decided to pivot and focus on
//               learning software engineering. And now here I am.
//               <br />
//               <br />
//             </p>
//           </div>
//         </div>
//         <div className="container-3">
//           <p>
//             I love programming and learning new things - as a result I
//             frequently work on side-projects and applications to further
//             increase my skills.
//             <br />
//             <br />
//             Here is a look at some of my{" "}
//             <Link to={"/projects/"}>projects</Link>.
//           </p>
//         </div>
//       </div>
