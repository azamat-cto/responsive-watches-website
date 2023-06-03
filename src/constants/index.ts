import Testimonials1 from '../assets/images/testimonial1.jpg'
import Testimonials2 from '../assets/images/testimonial2.jpg'
import Testimonials3 from '../assets/images/testimonial3.jpg'
import New1 from '../assets/images/new1.png'
import New2 from '../assets/images/new2.png'
import New3 from '../assets/images/new3.png'
import New4 from '../assets/images/new4.png'
import Featured1 from '../assets/images/featured1.png'
import Featured2 from '../assets/images/featured2.png'
import Featured3 from '../assets/images/featured3.png'

export const links = [
  {
    key: 'home',
    label: 'Home',
    url: '#home'
  },
  {
    key: 'featured',
    label: 'Featured',
    url: '#featured'
  },
  {
    key: 'products',
    label: 'Products',
    url: '#products'
  },
  {
    key: 'new',
    label: 'New',
    url: '#new'
  }
]

export const testimonials = [
  {
    key: 1,
    description:
      'They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.',
    date: 'March 27. 2021',
    img: Testimonials1,
    name: 'Lee Doe',
    detail: 'Director of a company'
  },
  {
    key: 2,
    description:
      'They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.',
    date: 'March 27. 2021',
    img: Testimonials2,
    name: 'Samantha Mey',
    detail: 'Director of a company'
  },
  {
    key: 3,
    description:
      'They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.',
    date: 'March 27. 2021',
    img: Testimonials3,
    name: 'Raul Zaman',
    detail: 'Director of a company'
  }
]

export const items = [
  {
    key: 'new1',
    title: 'Longines rose',
    img: New1,
    price: '$980'
  },
  {
    key: 'new2',
    title: 'Jazzmaster',
    img: New2,
    price: '$1150'
  },
  {
    key: 'new3',
    title: 'Dreyfuss gold',
    img: New3,
    price: '$750'
  },
  {
    key: 'new4',
    title: 'Portuguese rose',
    img: New4,
    price: '$1590'
  }
]

export const carts = [
  {
    key: 'jazzmaster',
    img: Featured1,
    title: 'Jazzmaster',
    price: 1050,
    amount: 1
  },
  {
    key: 'rosegold',
    img: Featured2,
    title: 'Rose Gold',
    price: 850,
    amount: 1
  },
  {
    key: 'longinesgold',
    img: Featured3,
    title: 'Longines Rose',
    price: 980,
    amount: 1
  }
]