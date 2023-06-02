import { Container } from '@mui/material'
import TestimonialPng from '../../assets/images/testimonial.png'
import { testimonials } from '../../constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

export const Testimonials = () => {
  return (
    <section className="testimonials section">
      <Container>
        <div className="testimonials__grid grid">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                className="testimonials__card swiper-slide"
                key={testimonial.key}
              >
                <div className="testimonials__quote">
                  <i className="bx bxs-quote-alt-left"></i>
                </div>
                <p className="testimonials__description">
                  {testimonial.description}
                </p>
                <h3 className="testimonials__date">{testimonial.date}</h3>

                <div className="testimonials__perfil">
                  <img
                    className="testimonials__perfil-img"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />

                  <div className="testimonials__perfil-data">
                    <span className="testimonials__perfil-name">
                      {testimonial.name}
                    </span>
                    <span className="testimonials__perfil-detail">
                      {testimonial.detail}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-next">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="bx bx-left-arrow-alt"></i>
            </div>
          </Swiper>

          <div className="testimonials__images">
            <div className="testimonials__square"></div>
            <img className="testimonials__img" src={TestimonialPng} alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}
