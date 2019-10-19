import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Moment from "react-moment"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import config from "../../data/SiteConfig"

import Layout from "../components/Layout"

export default class Blog extends Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <Helmet title={`Blog - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="blog-container">
            <div className="blog-title">
              <h1>
                Blog
                <br />
                <span className="title-sub">
                  {data.allMarkdownRemark.totalCount} posts
                </span>
              </h1>
            </div>
            <div className="post-list">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="posts" key={node.id}>
                  <Link to={node.fields.slug}>
                    <p className="title">{node.frontmatter.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
