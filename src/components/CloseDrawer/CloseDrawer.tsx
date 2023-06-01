import CloseIcon from '@mui/icons-material/CloseRounded'
import { StyledCloseDrawer } from './styled.tsx'
import { toggleDrawer } from '../../store/slices/drawerSlice.ts'
import { useAppDispatch } from '../../store/hooks.ts'

export const CloseDrawer = () => {
  const dispatch = useAppDispatch()

  return (
    <StyledCloseDrawer onClick={() => dispatch(toggleDrawer(false))}>
      <CloseIcon />
    </StyledCloseDrawer>
  )
}
