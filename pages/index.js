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
        <Formik
          initialValues={{
            name: '',
            theme: '',
            url: '',
            artist: '',
            album: '',
          }}
          onSubmit={values => this.handleSubmitClick(values)}
          render={() => (
            <Form>
              <Field type="text" name="name" placeholder="Playlist Name" />
              <Field type="text" name="theme" placeholder="Playlist Theme" />
              <Field type="text" name="url" placeholder="Spotify Url" />
              <Field type="text" name="artist" placeholder="Artist/Band Name" />
              <Field type="text" name="album" placeholder="Album Title" />
              <button type="submit">Create Playlist</button>
            </Form>
          )}
        />
        <Playlist {...this.state.playlist} />
      </div>
    )
  }
}

export default Index
