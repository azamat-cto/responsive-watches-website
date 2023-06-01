import {
  StyledDrawer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNav
} from './styled.tsx'
import { CloseDrawer } from '../CloseDrawer'
import { links } from '../../constants'

export const Drawer = ({
  open,
  handleDrawerClose
}: {
  open: boolean
  handleDrawerClose: () => void
}) => {
  return (
    <StyledDrawer anchor="left" open={open} onClose={handleDrawerClose}>
      <StyledNav component="nav">
        <StyledList>
          {links.map((link) => (
            <StyledListItem key={link.key}>
              <StyledLink href={link.url} onClick={handleDrawerClose}>
                {link.label}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledNav>
      <CloseDrawer handleDrawerClose={handleDrawerClose} />
    </StyledDrawer>
  )
}
