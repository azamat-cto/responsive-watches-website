import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'

export const StyledOpenDrawer = styled(IconButton)(({ theme }) => ({
  color: 'hsl(0, 0%, 15%)',
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))
