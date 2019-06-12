import React, {Component} from "react"
import {Link} from "gatsby"


export default class Footer extends Component {
    render() {
        return(
          <div className="feet-container">
            <div className="feet">
              <Link to="https://twitter.com/IanPark31931597">
                <p>twitter</p>
              </Link>
              <Link to="https://github.com/helloiain">
                <p>github</p>
              </Link>
            </div>
          </div>
        )
    }
}