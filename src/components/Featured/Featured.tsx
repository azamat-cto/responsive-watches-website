import { Container } from '@mui/material'
import Featured1 from '../../assets/images/featured1.png'
import Featured2 from '../../assets/images/featured2.png'
import Featured3 from '../../assets/images/featured3.png'

export const Featured = () => {
  return (
    <section className="featured section" id="featured">
      <h2 className="section__title">Featured</h2>
      <Container>
        <div className="featured__grid grid">
          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img
              src={Featured1}
              alt=""
              className="featured__img"
            />

            <div className="featured__data">
              <h3 className="featured__title">Jazzmaster</h3>
              <span className="featured__price">$1050</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img
              src={Featured2}
              alt=""
              className="featured__img"
            />

            <div className="featured__data">
              <h3 className="featured__title">Ingersoll</h3>
              <span className="featured__price">$250</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img
              src={Featured3}
              alt=""
              className="featured__img"
            />

            <div className="featured__data">
              <h3 className="featured__title">Rose gold</h3>
              <span className="featured__price">$890</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>
        </div>
      </Container>
    </section>
  )
}
