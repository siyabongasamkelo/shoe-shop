import React from "react";
import { Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../Features/Cart";
import CartCard from "./CartCard";
import Counter from "./Counter";

const CartItem = ({ count, price, image, name, id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{count}</td>
      <td>
        <CartCard image={image} name={name} />
      </td>
      <td>
        <Counter id={id} quantity={quantity} />
      </td>
      <td>{price}</td>
      <td>
        <Trash
          onClick={() => {
            dispatch(removeItem({ id: id }));
          }}
        />
      </td>
    </tr>
  );
};

export default CartItem;
