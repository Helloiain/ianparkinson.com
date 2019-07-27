/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import Helmet from "react-helmet"
import config from "../../data/SiteConfig"
import SEO from "../components/seo"
import Learning from "../components/Learning"

import Layout from "../components/Layout"

export default class Me extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="me-container">
            <h1>About me</h1>
            <p>
              I'm Ian Parkinson, a self-learning software developer based in Houston, Tx. 
              Before, I had been working part-time for a while at a very lovely dine-in theater but quickly
              realized that that was not for me... at all. So a couple months ago I decided to quit and begin focusing 
              on a career in which I believe i'm able to create useful and beautiful things.
            </p>
            <p>
              I've always been fascinated with the future (I know I know, not much of a surprise) 
              not only how it will look but also how we'll get there. It's been clear for a while
              now that tech is leading that effort so I decided to begin teaching myself programming,
              the best way I could think of to help and it was no surprise when I fell in love immediately.
              In between all the tediousness and fustration that seems to just be another feature of programming,
              there is a feeling of suchhhhhh satisfaction for the clarity and logic of well written code
              (whenever I can manage, but i'm getting better at it every day!).
            </p>
          </div>
          <div>
            <h3>What i'm Learning</h3>
            <Learning />
          </div>
        </div>
      </Layout>
    )
  }
}
