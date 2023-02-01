import {React} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cart from './Cart'
import { addToCart, removeFromCart, buyFromCart} from "../../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const checkoutHandler = () => {
    dispatch(buyFromCart())        
  };


  return (
    <>
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h1>Carrello</h1>
                {cartItems.length === 0 ? (                                    
                    <div>
                      Il tuo carrello è vuoto <Link to="/e-commerce">Vai indietro</Link>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <Cart
                        key={item.product}
                        item={item}
                        qtyChangeHandler={qtyChangeHandler}
                        removeHandler={removeFromCartHandler}
                      />
                    ))
                  )}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Articoli ({getCartCount()}) selezionati</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button onClick={() => checkoutHandler()} disabled={cartItems.length === 0}>
                      Termina e Paga                    
                    </button>
                </div>
            </div>
        </div>    
    </>    
  )
}


export default CartScreen