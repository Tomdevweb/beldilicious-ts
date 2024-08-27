import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../features/CartSlice";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log("CART:::", cart);
  return (
    <div>
      {cart.items.map((item) => (
        <>
          <h1>{item.name}</h1>
          <p>Prix: {item.price}</p>

          <button onClick={() => dispatch(decrementQuantity(item.id))}>
            -
          </button>
          <p>Quantité: {item.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>
            +
          </button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </>
      ))}
    </div>
  );
};

export default Cart;
