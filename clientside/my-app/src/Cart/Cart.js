import styled from "styled-components";
import Header from "../Components/Header";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { clearCart } from "../Features/Cart";
import CartItem from "./CartItem";

export const OneProdStyled = styled.section`
  height: 100vh;
  width: 100vw;
`;

export const OneProdCover = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 10px;
  background: linear-gradient(to top, #0a2647, #0a2647);
  @media (max-width: 480px) {
  }
`;
export const FinalLayer = styled.div`
  width: 90%;
  height: 95%;
`;
export const MainDiv = styled.div`
  height: 90%;
  width: 100%;
  .main-cover {
    height: 100%;
    width: 100%;
    .left-div {
      width: 65%;
      height: 20%;
      svg {
        transform: scale(150%);
        margin-left: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          fill: #ff6e31;
        }
      }
      @media (max-width: 480px) {
        width: 100%;
      }
    }
    .right-div {
      width: 30%;
      height: 20%;
      .check-cover {
        height: 95%;
        width: 90%;
        margin-left: 5%;
      }
      @media (max-width: 480px) {
        width: 100%;
        position: absolute;
        top: 63%;
        left: 0;
      }
    }
  }
`;

const Cart = () => {
  const theCart = useSelector((state) => state.cart.value);
  const theUser = useSelector((state) => state.user.value);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalP = 0;
    if (theCart.length !== 0) {
      for (let i = 0; i < theCart.length; i++) {
        totalP = totalP + theCart[i].price * theCart[i].quantity;
      }
      setTotalPrice(totalP);
    }
  }, [theCart, totalPrice]);

  const showToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const addToBought = () => {
    const orders = [];

    for (let i = 0; i < theCart.length; i++) {
      let orderTemp = {
        itemId: theCart[i].id,
        buyerId: theUser.user[0]._id,
        itemName: theCart[i].name,
        itemPrice: theCart[i].price,
        itemImage: theCart[i].image,
        storeId: theCart[i].store,
        quantity: theCart[i].quantity,
        date: new Date(),
        status: "proccessing",
      };
      orders.push(orderTemp);
    }

    axios
      .post("https://shoe-shop-jbik.onrender.com/add/order", { order: orders })
      .then((res) => {
        showToastMessage(res.data);
        dispatch(clearCart());
      })
      .catch((err) => {
        showErrorMessage(err);
      });
  };

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <ToastContainer />
          <Header />
          <MainDiv className=" d-flex justify-content-center">
            <div className="main-cover d-flex flex-column flex-md-row justify-content-between">
              <div className="left-div">
                <div className=" d-flex justify-content-between text-white mt-5">
                  <h4>Cart</h4>
                  <p>X Clear Cart</p>
                </div>
                <div>
                  <Table className="text-white">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {theCart.map((carts, count) => {
                        return (
                          <CartItem
                            image={carts.image}
                            price={carts.price}
                            name={carts.name}
                            count={count + 1}
                            quantity={carts?.quantity}
                            id={carts.id}
                          />
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="right-div  mt-md-5">
                <div className="check-cover text-white">
                  <h6>Promo Code</h6>
                  <div className=" d-flex justify-content-between">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                    />
                    <Button>Apply</Button>
                  </div>
                  <div className=" text-white mt-5">
                    <div className=" d-flex justify-content-between">
                      <p>Subtotal</p>
                      <p>R {totalPrice}</p>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p>Discount</p>
                      <p>R 00</p>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p>Total</p>
                      <p>R {totalPrice}</p>
                    </div>
                    <Button style={{ width: "100%" }} onClick={addToBought}>
                      Continue to checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Cart;
