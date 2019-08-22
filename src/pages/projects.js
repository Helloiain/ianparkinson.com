/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import config from "../../data/SiteConfig"
import SEO from "../components/seo"

import Layout from "../components/Layout"
import readingList from "../assets/images/reading-list.png"
import sassy from "../assets/images/sassy.png"

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  padding-bottom: 60px;
  img{
    margin: 45px 0 0 0;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }
  h4{
    text-align: center;
  }
`

const Heading = styled.h3`
text-align: center;
`

export default class Me extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Projects - ${config.siteTitle}`}/>
        <SEO/>
        <div className="container">
          <div>
            <Heading>Reading List</Heading>
            <ProjectContainer>
              <div>
                <h4>Project Overview</h4>
                <p>- Thin back-end server created with <strong>Express</strong>.</p>
                <p>- <strong>MongoDB</strong> used as database to store collections.</p>
                <p>- Single page web-app created in <strong>React.js</strong>.</p>
                <p>- <strong>CRUD</strong> functions made with help of <strong>Graphql</strong>.</p>
                <p>- All made possible with <strong>Node.js</strong></p>
              </div>
              <div>
                <img className="" src={readingList} alt="" width="360px" height="220px" />
                <div className="links">
                  <a href="https://github.com/Helloiain/reading_list" rel="noopener noreferrer" target="_blank">code source</a>
                </div>
              </div>
            </ProjectContainer>
            <Heading>Sassy</Heading>
            <ProjectContainer>
              <div>
                <h4>Project Overview</h4>
                <p>- Fully hand coded  <strong>HTML,CSS,JS</strong></p>
                <p>- Sliders and gallery made with <strong>jQuery</strong></p>
              </div>
              <div>
                <img className="" src={sassy} alt='' width="360px" height="220px" />
                <div className="links">
                  <a href="https://vibrant-poitras-e44ea7.netlify.com/" rel="noopener noreferrer" target="_blank">visit site</a>
                  <a href="https://github.com/Helloiain/reading_list" rel="noopener noreferrer" target="_blank">code source</a>
                </div>
              </div>
            </ProjectContainer>
          </div>
        </div>
      </Layout>
    )
  }
}
