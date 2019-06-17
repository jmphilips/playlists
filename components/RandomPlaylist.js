import React, { Component } from 'react'
import Playlist from './Playlist'

class RandomPlaylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: {}
        }
    }
  componentDidMount() {
    fetch('http://localhost:3001/playlist')
      .then(res => res.json())
      .then(data => {
          const max = data.length
          const randomNumber = Math.random() * max
          const roundedRandomNumber = Math.floor(randomNumber)
        this.setState({playlist: data[roundedRandomNumber]})
      })
  }

  render() {
      return(
        <Playlist {...this.state.playlist}/>
      )
  }
}

export default RandomPlaylist