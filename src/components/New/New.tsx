import { Container } from '@mui/material'
import { items } from '../../constants'
import Carousel from 'react-multi-carousel'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export const New = () => {
  return (
    <section className="new section" id="new">
      <Container>
        <h2 className="section__title">New Arrivals</h2>

        <div className="new__grid grid">
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
          >
            {items.map((item) => (
              <article className="new__card" key={item.key}>
                <span className="new__tag">New</span>

                <img className="new__img" src={item.img} alt={item.title} />

                <div className="new__data">
                  <h3 className="new__title">{item.title}</h3>
                  <span className="new__price">{item.price}</span>
                </div>

                <button className="button new__button">ADD TO CART</button>
              </article>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
