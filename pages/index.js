import React, { Component } from 'react'
import Playlist from '../components/Playlist'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: {},
    }
  }
  handleSubmitClick = () => {
    const { name, theme, url, artist, album } = this
    const postObject = {
      name: name.value,
      theme: theme.value,
      url: url.value,
      artist: artist.value,
      album: album.value,
    }
    fetch('http://localhost:3001/playlist', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postObject),
    })
      .then(res => res.json())
      .then(data => this.setState({ playlist: data }))
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Playlist name"
          ref={input => (this.name = input)}
        />
        <input
          type="text"
          placeholder="Playlist theme"
          ref={input => (this.theme = input)}
        />
        <input
          type="text"
          placeholder="Spotify url"
          ref={input => (this.url = input)}
        />
        <input
          type="text"
          placeholder="Artist/Band Name"
          ref={input => (this.artist = input)}
        />
        <input
          type="text"
          placeholder="Album Title"
          ref={input => (this.album = input)}
        />
        <button type="submit" onClick={this.handleSubmitClick}>
          Create Entry
        </button>
        {this.state.playlist && <Playlist {...this.state.playlist} />}
      </div>
    )
  }
}

export default Index
