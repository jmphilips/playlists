import styled from 'styled-components'

const Playlist = ({ name, theme, id }) => (
  <div key={id}>
    <h2>{name}</h2>
    <p>{theme}</p>
    <p>{id}</p>
  </div>
)

export default Playlist