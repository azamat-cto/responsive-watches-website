import { Box } from '@mui/material'
import { StyledAppBar, StyledToolbar } from './styled.tsx'
import { Logo } from '../Logo'
import { Navbar } from '../Navbar'
import { ShoppingBag } from '../ShoppingBag'
import { OpenDrawer } from '../OpenDrawer'

export const Header = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Logo />
        <Navbar />
        <Box>
          <ShoppingBag />
          <OpenDrawer />
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  )
}
