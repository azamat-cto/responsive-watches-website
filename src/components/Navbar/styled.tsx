import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledNav = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}))
