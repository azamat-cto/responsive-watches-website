import { StyledDrawer } from './styled.tsx'
import { links } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { toggleDrawer } from '../../store/slices/drawerSlice.ts'
import { Link as ScrollLink } from 'react-scroll'

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
              <ScrollLink
                className="drawer-nav__link"
                href={`#${link.url}`}
                onClick={() => dispatch(toggleDrawer(false))}
                activeClass="active"
                to={link.key}
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                {link.label}
              </ScrollLink>
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
