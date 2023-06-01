import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'

export const StyledShoppingBag = styled(IconButton)(({ theme }) => ({
  color: 'hsl(0, 0%, 15%)',
  [theme.breakpoints.up('sm')]: {}
}))
