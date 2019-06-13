import styled from 'styled-components'

const Playlist = ({ name, theme, id, className }) => (
  <div key={id} className={className}>
    <h2>{name}</h2>
    <p>{theme}</p>
    <p>{id}</p>
  </div>
)

const StyledPlaylist = styled(Playlist)`
  width: 20rem;
  height: 20rem;
  border: 2px solid black;
`

export default StyledPlaylist