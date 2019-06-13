import { Formik, Field, Form } from 'formik'
import React, { Component } from 'react'
import Playlist from '../components/Playlist'
import styled from 'styled-components'

const CustomField = ({className, text, placeholder, name}) => (
    <Field className={className} text={text} placeholder={placeholder} name={name} />
)

const StyledField = styled(CustomField)`
    border: 1px solid #534B52;
    height: 2rem;
    font-weight: 300;
    background-color: F1F0EA;
    width: 20rem;
    margin: 1rem;
`

const StyledButton = styled.button`
    border: 1px solid #534B52;
    height: 2rem;
    font-weight: 300;
    text-align: center;
`

const Container = styled.div`
    width: 20rem;
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
              <StyledField type="text" name="name" placeholder="Playlist Name" />
              <StyledField type="text" name="theme" placeholder="Playlist Theme" />
              <StyledField type="text" name="url" placeholder="Spotify Url" />
              <StyledField type="text" name="artist" placeholder="Artist/Band" />
              <StyledField type="text" name="albums" placeholder="Album" />
              <StyledButton type="submit">Create Playlist</StyledButton>
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
