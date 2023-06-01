import { styled } from '@mui/material/styles'
import { Link } from '@mui/material'

export const StyledLogo = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: '700',
  letterSpacing: '1px',
  color: 'hsl(0, 0%, 15%)',
  display: 'inline-flex',
  alignItems: 'center',
  columnGap: '0.25rem',
  [theme.breakpoints.up('sm')]: {}
}))
