import React, { Component } from 'react'
import Playlist from '../components/Playlist'
import Nav from '../components/Nav'
import { Formik, Field, Form } from 'formik'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: {},
      playlists: [],
    }
  }
  handleSubmitClick = postObject => {
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

  handleFetchClick = () => {
    fetch('http://localhost:3001/playlist', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => this.setState({ playlists: data }))
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}

export default Index
