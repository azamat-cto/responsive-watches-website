import { Link, List, ListItem } from '@mui/material'
import { StyledNav } from './styled.tsx'
import { links } from '../../constants'

export const Navbar = () => {
  return (
    <StyledNav component="nav">
      <List disablePadding>
        {links.map((link) => (
          <ListItem disablePadding key={link.key}>
            <Link href={link.url}>{link.label}</Link>
          </ListItem>
        ))}
      </List>
    </StyledNav>
  )
}
