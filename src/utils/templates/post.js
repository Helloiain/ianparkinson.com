import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Moment from "react-moment"
import Helmet from "react-helmet"
import SEO from "../../components/seo"
import config from "../../../data/SiteConfig"

import Layout from "../../components/Layout"

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter

    if(!post.id) {
      post.id = slug
    }


    return (
      <Layout>
        <Helmet>
          <title>{`${post.title}- ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="container">
          <h3>
            {post.title}
            <br />
            <span className="title-sub">
              <Moment format="MMMM do, YYYY">{post.date}</Moment>
            </span>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />

          <Link to="/blog">Back to blog</Link>
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`
