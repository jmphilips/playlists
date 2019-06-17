import React, { Component } from 'react'
import Playlist from '../components/Playlist'

class playlists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/playlist')
      .then(res => res.json())
      .then(data => this.setState({ playlists: data }))
  }

  render() {
    return (
      <p>
        {this.state.playlists.length > 0 &&
          this.state.playlists.map(playlist => <Playlist {...playlist} />)}
      </p>
    )
  }
}

export default playlists
