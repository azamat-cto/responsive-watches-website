import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { items } from '../../constants'

export const New = () => {
  return (
    <section className="new section" id="new">
      <Container>
        <h2 className="section__title">New Arrivals</h2>

        <div className="new__grid">
          <Swiper spaceBetween={24} loop={true}>
            {items.map((item) => (
              <SwiperSlide key={item.key}>
                <article className="new__card swiper-slide">
                  <span className="new__tag">New</span>

                  <img className="new__img" src={item.img} alt={item.title} />

                  <div className="new__data">
                    <h3 className="new__title">{item.title}</h3>
                    <span className="new__price">{item.price}</span>
                  </div>

                  <button className="button new__button">ADD TO CART</button>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
