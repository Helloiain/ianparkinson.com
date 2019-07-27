import React, { Component } from "react"

export default class Quotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      author: '',
    }
  }


  componentDidMount() {
    const quotes = [
      {
        text: "When action grows unprofitable, gather information; when information grows unprofitable, sleep.",
        author: "- Ursula K. Le Guin, The Left Hand of Darkness",
      },
      {
        text: "A city where people shine brighter than the neon lights, are more violent than the weapons they carry and hope for a better tomorrow harder than anywhere else.",
        author: "- author 2",
      },
      {
        text: "A great many people think they are thinking when they are merely rearranging their prejudices",
        author: "- William James",
      },
    ]

    const iterateQuote = () => {
        const currentQuote = quotes[Math.floor(Math.random()*quotes.length)]
        this.setState({
          text: currentQuote.text,
          author: currentQuote.author,
        })
        // non-random iteration
        // i++
        // if (i >= quotes.length) {
        //   i = 0
        // }
      }

    iterateQuote();
    setInterval(iterateQuote,8000);
  }

  render() {
    return (
      <div className="container-3">
        <blockquote>
          {this.state.text}
          <cite>{this.state.author}</cite>
        </blockquote>
      </div>
    )
  }
}
