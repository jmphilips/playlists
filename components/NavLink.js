import styled from 'styled-components'
import Link from 'next/link'

const NavLink = ({ className, destination, text }) => (
  <div className={className}>
    <Link href={destination}>
      <a>{text}</a>
    </Link>
  </div>
)

const StyledNavLink = styled(NavLink)`
  margin: 1rem;
  padding: 1rem;
  display: inline;
`

export default StyledNavLink
