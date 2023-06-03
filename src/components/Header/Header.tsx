import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { links } from '../../constants'
import { toggleDrawer } from '../../store/slices/drawerSlice.ts'
import { useAppDispatch } from '../../store/hooks.ts'
import { Link as ScrollLink } from 'react-scroll'

export const Header = () => {
  const [bgColor, setBgColor] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 80) {
        setBgColor(true)
      } else {
        setBgColor(false)
      }
    }

    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [bgColor])

  return (
    <header className={`${bgColor ? 'header scroll-header' : 'header'}`}>
      <Container>
        <div className="header__toolbar">
          <a className="header__logo" href="#home">
            <i className="bx bxs-watch header__logo-icon"></i>
            Rolex
          </a>

          <nav className="nav">
            <ul className="nav__list">
              {links.map((link) => (
                <li className="nav__item" key={link.key}>
                  <ScrollLink
                    className="nav__link"
                    href={`#${link.url}`}
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

          <div className="header__btns">
            <button className="header__shop" type="button">
              <i className="bx bx-shopping-bag"></i>
            </button>
            <button
              className="header__toggle"
              type="button"
              onClick={() => dispatch(toggleDrawer(true))}
            >
              <i className="bx bx-grid-alt"></i>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
