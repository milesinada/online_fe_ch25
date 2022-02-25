import storeContext from "../store/storecontext";
import { useContext } from "react";
import Product from "./product";

const Cart = () => {
  const { cart } = useContext(storeContext);
  return (
    <div>
      <h1>Your Cart contains {cart.length} products</h1>
      <div className="products">
        <ul>
          {cart.map((prod, index) => (
            <li key={(prod._id, index)}>{prod.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
