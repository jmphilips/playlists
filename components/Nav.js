import styled from 'styled-components'
import NavLink from './NavLink'

const Nav = ({ className }) => (
  <div className={className}>
    <NavLink destination="/playlists" text="View All Playlists" />
    <NavLink destination="/create" text="Create New Playlist" />
    <NavLink destination="/" text="Home" />
  </div>
)

const StyledNav = styled(Nav)`
  width: 100%;
  top: 0;
  margin-bottom: 2rem;
  padding: 2rem;F
`

export default StyledNav
