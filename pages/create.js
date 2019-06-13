import { Formik, Field, Form } from 'formik'
import React, { Component } from 'react'
import Playlist from '../components/Playlist'

class Create extends Component {
  constructor() {
    super()
    this.state = {
      playlist: {},
      submitted: false
    }
  }

  handleSubmitClick = postObject => {
    console.log('clicked')
    fetch('http://localhost:3001/playlist', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postObject),
    })
      .then(res => res.json())
      .then(data => this.setState({ playlist: data, submitted: true }))
  }

  render() {
    return (
      <div>
        <Formik
          initialvalues={{
            name: '',
            theme: '',
            artist: '',
            album: '',
            url: '',
          }}
          onSubmit={values => this.handleSubmitClick(values)}
          render={() => (
            <Form>
              <Field type="text" name="name" placeholder="Playlist Name" />
              <Field type="text" name="theme" placeholder="Playlist Theme" />
              <Field type="text" name="url" placeholder="Spotify Url" />
              <Field type="text" name="artist" placeholder="Artist/Band" />
              <Field type="text" name="albumS" placeholder="Album" />
              <button type="submit">Create Playlist</button>
            </Form>
          )}
        />
        {this.state.submitted && <Playlist {...this.state.playlist} /> }
      </div>
    )
  }
}

export default Create


// colors:
// arsenic #474448
// darkPurple #2d232e
// bone: e0ddcf
// darkLiver: 534b52
// isabelline: f1f0ea