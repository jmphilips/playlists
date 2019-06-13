import styled from 'styled-components'

const Playlist = ({ name, theme, id, className }) => (
  <div key={id} className={className}>
    <StyledH2>{name}</StyledH2>
    <p>{theme}</p>
  </div>
)

const StyledH2 = styled.h2`
  font-family: 'Helvetica';
  color: red;
`

const StyledPlaylist = styled(Playlist)`
  width: 20rem;
  height: 20rem;
  padding: 2rem;
  margin: 2rem;
  background-color: #474448;
  color: #E0DDCF;
`

export default StyledPlaylist