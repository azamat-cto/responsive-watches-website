import { Drawer } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { toggleCart } from '../../store/slices/cartSlice.ts'
import { carts } from '../../constants'

export const Cart = () => {
  const { isOpen } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => dispatch(toggleCart(false))}
    >
      <div className="cart">
        <button
          className="cart__close"
          type="button"
          onClick={() => dispatch(toggleCart(false))}
        >
          <i className="bx bx-x"></i>
        </button>

        <h2 className="cart__title-center">My Cart</h2>

        <div className="cart__grid">
          {carts.map((cart) => (
            <article className="cart__card" key={cart.key}>
              <div className="cart__box">
                <img className="cart__img" src={cart.img} alt={cart.title} />
              </div>

              <div className="cart__details">
                <h3 className="cart__title">{cart.title}</h3>
                <span className="cart__price">${cart.price}</span>

                <div className="cart__amount">
                  <div className="cart__amount-content">
                    <span className="cart__amount-box">
                      <i className="bx bx-minus"></i>
                    </span>

                    <span className="cart__amount-number">{cart.amount}</span>

                    <span className="cart__amount-box">
                      <i className="bx bx-plus"></i>
                    </span>
                  </div>

                  <i className="bx bx-trash-alt cart__amount-trash"></i>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="cart__prices">
          <span className="cart__prices-item">3 items</span>
          <span className="cart__prices-total">$2880</span>
        </div>
      </div>
    </Drawer>
  )
}
