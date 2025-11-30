import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandom = () => {
    const newNum = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newNum})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number Generator</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="btn-generate"
            type="button"
            onClick={this.generateRandom}
          >
            Generate
          </button>
          <p>{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
