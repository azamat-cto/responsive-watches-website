import { styled } from '@mui/material/styles'
import { Box, Drawer, Link, List, ListItem } from '@mui/material'

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    padding: '6rem 2rem 3.5rem'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))

export const StyledNav = styled(Box)(() => ({
  height: '100%'
}))

export const StyledList = styled(List)(() => ({
  padding: '0',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '2rem'
}))

export const StyledListItem = styled(ListItem)(() => ({
  padding: '0',
  width: 'initial',
  display: 'block'
}))

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: 'hsl(0, 0%, 15%)',
  fontSize: '1.25rem',
  fontWeight: 500,
  transition: '0.3s',
  '&:hover': {
    color: 'hsl(31, 100%, 70%)'
  }
}))
