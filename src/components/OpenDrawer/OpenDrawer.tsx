import WidgetsIcon from '@mui/icons-material/WidgetsRounded'
import { StyledOpenDrawer } from './styled.tsx'

export const OpenDrawer = ({
  handleDrawerOpen
}: {
  handleDrawerOpen: () => void
}) => {
  return (
    <StyledOpenDrawer onClick={handleDrawerOpen}>
      <WidgetsIcon />
    </StyledOpenDrawer>
  )
}
