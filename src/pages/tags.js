import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Helmet from "react-helmet"
import SEO from "../components/seo";
import config from "../../data/SiteConfig"

import Layout from "../components/Layout"

export default class TagsPage extends Component {
  render() {
    const {group} = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <Helmet title={`Tags - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div>
            <h3>Tags</h3>
            <ul>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query tagsQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
