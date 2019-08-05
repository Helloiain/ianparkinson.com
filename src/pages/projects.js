/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import config from "../../data/SiteConfig"
import SEO from "../components/seo"

import Layout from "../components/Layout"

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Heading = styled.h2`
text-align: center;
`

export default class Me extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Projects - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div>
            <Heading>Reading List</Heading>
            <ProjectContainer>
              <ul>
                <li>Express</li>
                <li>MongoDB</li>
                <li>React.js</li>
                <li>Graphql</li>
                <li>Node.js</li>
              </ul>
              <img className="" alt="" width="350px" />
            </ProjectContainer>
          </div>
        </div>
      </Layout>
    )
  }
}
