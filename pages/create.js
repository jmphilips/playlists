import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import Playlist from '../components/Playlist'
import styled from 'styled-components'
import FormField from '../components/FormField'
import Button from '../components/Button'

const Container = styled.div`
  width: 30rem;
  margin: auto;
  height: 80%;
`

class Create extends Component {
  constructor() {
    super()
    this.state = {
      playlist: {},
      submitted: false,
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
      <Container>
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
              <div style={{ textAlign: 'center' }}>
                <FormField
                  type="text"
                  name="name"
                  placeholder="Playlist Name"
                />
                <FormField
                  type="text"
                  name="theme"
                  placeholder="Playlist Theme"
                />
                <FormField type="text" name="url" placeholder="Spotify Url" />
                <FormField
                  type="text"
                  name="artist"
                  placeholder="Artist/Band"
                />
                <FormField type="text" name="albums" placeholder="Album" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button type="submit">Create Playlist</Button>
              </div>
            </Form>
          )}
        />
        {this.state.submitted && <Playlist {...this.state.playlist} />}
      </Container>
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
