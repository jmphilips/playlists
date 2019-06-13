import React, { Component } from 'react'

class playlists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    }
  }
  componentDidMount() {

  }

  render() {
    return(
      <p>
        Hello from playlists
      </p>
    )
  }
}

export default playlists