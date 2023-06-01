import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'

export const StyledCloseDrawer = styled(IconButton)(() => ({
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  color: 'hsl(0, 0%, 15%)'
}))
