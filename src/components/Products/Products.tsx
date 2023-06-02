import { Container } from '@mui/material'
import Product1 from '../../assets/images/product1.png'
import Product2 from '../../assets/images/product2.png'
import Product3 from '../../assets/images/product3.png'
import Product4 from '../../assets/images/product4.png'
import Product5 from '../../assets/images/product5.png'

export const Products = () => {
  return (
    <section className="products section" id="products">
      <Container>
        <h2 className="section__title">Products</h2>

        <div className="products__grid grid">
          <article className="products__card">
            <img className="products__img" src={Product1} alt="" />

            <h3 className="products__title">Spirit rose</h3>
            <span className="products__price">$1500</span>

            <button className="products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </article>

          <article className="products__card">
            <img className="products__img" src={Product2} alt="" />

            <h3 className="products__title">Khaki pilot</h3>
            <span className="products__price">$1350</span>

            <button className="products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </article>

          <article className="products__card">
            <img className="products__img" src={Product3} alt="" />

            <h3 className="products__title">Jubilee black</h3>
            <span className="products__price">$870</span>

            <button className="products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </article>

          <article className="products__card">
            <img className="products__img" src={Product4} alt="" />

            <h3 className="products__title">Fosil me3</h3>
            <span className="products__price">$650</span>

            <button className="products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </article>

          <article className="products__card">
            <img className="products__img" src={Product5} alt="" />

            <h3 className="products__title">Duchen</h3>
            <span className="products__price">$950</span>

            <button className="products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </article>
        </div>
      </Container>
    </section>
  )
}
