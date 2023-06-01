import WidgetsIcon from '@mui/icons-material/WidgetsRounded'
import { StyledOpenDrawer } from './styled.tsx'
import { toggleDrawer } from '../../store/slices/drawerSlice.ts'
import { useAppDispatch } from '../../store/hooks.ts'

export const OpenDrawer = () => {
  const dispatch = useAppDispatch()

  return (
    <StyledOpenDrawer onClick={() => dispatch(toggleDrawer(true))}>
      <WidgetsIcon />
    </StyledOpenDrawer>
  )
}
