import {
  StyledDrawer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNav
} from './styled.tsx'
import { CloseDrawer } from '../CloseDrawer'
import { links } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { toggleDrawer } from '../../store/slices/drawerSlice.ts'

export const Drawer = () => {
  const { isOpen } = useAppSelector((state) => state.drawer)
  const dispatch = useAppDispatch()

  return (
    <StyledDrawer
      anchor="left"
      open={isOpen}
      onClose={() => dispatch(toggleDrawer(false))}
    >
      <StyledNav component="nav">
        <StyledList>
          {links.map((link) => (
            <StyledListItem key={link.key}>
              <StyledLink
                href={link.url}
                onClick={() => dispatch(toggleDrawer(false))}
              >
                {link.label}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledNav>
      <CloseDrawer />
    </StyledDrawer>
  )
}
