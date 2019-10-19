import React, { Component } from "react"

export default class Quotes extends Component {
  quotes = [
    {
      text:
        "When action grows unprofitable, gather information; when information grows unprofitable, sleep.",
      author: "- Ursula K. Le Guin, The Left Hand of Darkness",
    },
    {
      text:
        "A city where people shine brighter than the neon lights, are more violent than the weapons they carry " +
        "and hope for a better tomorrow harder than anywhere else.",
      author: "- unknown",
    },
    {
      text:
        "A great many people think they are thinking when they are merely rearranging their prejudices.",
      author: "- William James",
    },
    {
      text: "Always be on the look out for wonder.",
      author: "- E. B White",
    },
    {
      text:
        "Not everything that is faced can be changed. But nothing can be changed until it is faced.",
      author: "- James Baldwin",
    },
    {
      text: "Fashions fade, style is eternal.",
      author: "- Yves Saint Laurent",
    },
    {
      text:
        "When life itself seems lunatic, who knows where madness lies? Perhaps to be too practical is madness. " +
        "To surrender dreams - this may be madness. Too much sanity may be madness - and maddest of all: to see life " +
        "as it is, and not as it should be!",
      author: "- Don Quixote",
    },
  ]

  constructor(props) {
    super(props)
    this.state = {
      text: "",
      author: "",
    }
  }

  componentDidMount() {
    this.iterateQuote()
    setInterval(this.iterateQuote, 10000)
  }

  componentWillUnmount() {
    setInterval(this.iterateQuote)
  }

  iterateQuote = () => {
    const currentQuote = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ]
    this.setState({
      text: currentQuote.text,
      author: currentQuote.author,
    })
    // linear iteration
    // i++
    // if (i >= quotes.length) {
    //   i = 0
    // }
  }

  render() {
    return (
      <div className="container-3">
        <blockquote>
          "{this.state.text}"<cite>{this.state.author}</cite>
        </blockquote>
      </div>
    )
  }
}
