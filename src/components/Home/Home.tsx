import { Container } from '@mui/material'
import HomeImage from '../../assets/images/home.png'

export const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <div className="home__grid grid">
          <div className="home__img-bg">
            <img className="home__img" src={HomeImage} alt="Home image" />
          </div>

          <ul className="home__social">
            <li className="home__social-item">
              <a className="home__social-link" href="" target="_blank">
                Telegram
              </a>
            </li>
            <li className="home__social-item">
              <a className="home__social-link" href="" target="_blank">
                Instagram
              </a>
            </li>
            <li className="home__social-item">
              <a className="home__social-link" href="" target="_blank">
                Facebook
              </a>
            </li>
          </ul>

          <div className="home__data">
            <h1 className="home__title">
              NEW WATCH <br /> COLLECTIONS B720
            </h1>
            <p className="home__description">
              Latest arrival of the new imported watches of the B720 series,
              with a modern and resistant design.
            </p>
            <p className="home__price">$1245</p>
            <div className="home__btns">
              <a className="button button--gray button--small" href="#">
                Discover
              </a>

              <button className="button home__button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
