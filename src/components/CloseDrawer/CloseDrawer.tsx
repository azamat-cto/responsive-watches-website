import CloseIcon from '@mui/icons-material/CloseRounded'
import { StyledCloseDrawer } from './styled.tsx'

export const CloseDrawer = ({
  handleDrawerClose
}: {
  handleDrawerClose: () => void
}) => {
  return (
    <StyledCloseDrawer onClick={handleDrawerClose}>
      <CloseIcon />
    </StyledCloseDrawer>
  )
}
