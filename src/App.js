import React, { Component } from 'react'
import Nav from './components/NavBar'
import Tile from './components/Tile'
import tiles from './components/tiles'

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0
  }

  updateScore = () => {
    this.setState({
      currentScore: this.state.currentScore + 1
    })
  
    if (this.state.currentScore >= this.state.topScore) {
      this.setState({topScore: this.state.currentScore})
    } 
  }

  render() {
    return (
      <div className="App">
        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <div className="container pt-5">
          {tiles.map(tile => (
            <Tile
              updateScore={this.updateScore}
              title={tile.title}
              src={tile.src}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
