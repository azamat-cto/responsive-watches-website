import { StyledDrawer } from './styled.tsx'
import { links } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { toggleDrawer } from '../../store/slices/drawerSlice.ts'

export const Drawer = () => {
  const { isOpen } = useAppSelector((state) => state.drawer)
  const dispatch = useAppDispatch()

  return (
    <StyledDrawer
      anchor="left"
      open={isOpen}
      onClose={() => dispatch(toggleDrawer(false))}
    >
      <nav className="drawer-nav">
        <ul className="drawer-nav__list">
          {links.map((link) => (
            <li className="drawer-nav__item" key={link.key}>
              <a
                className="drawer-nav__link"
                href={link.url}
                onClick={() => dispatch(toggleDrawer(false))}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="drawer-nav__close"
        type="button"
        onClick={() => dispatch(toggleDrawer(false))}
      >
        <i className="bx bx-x"></i>
      </button>
    </StyledDrawer>
  )
}
