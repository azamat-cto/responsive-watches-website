import { styled } from '@mui/material/styles'
import { AppBar, Toolbar } from '@mui/material'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  [theme.breakpoints.up('sm')]: {}
}))

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {}
}))
