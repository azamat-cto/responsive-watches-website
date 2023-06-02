import { styled } from '@mui/material/styles'
import { Drawer } from '@mui/material'

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    padding: '6rem 2rem 3.5rem'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))
