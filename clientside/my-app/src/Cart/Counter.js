import styled from "styled-components";
import { useDispatch } from "react-redux";
import { detQuantity, removeItem } from "../Features/Cart";
export const CounterStyled = styled.div`
  height: 40px;
  width: 120px;
  .left {
    width: 30%;
    height: 100%;
    border-radius: 30px 0 0 30px;
    background-color: #ff6e31;
    cursor: pointer;
  }
  .middle {
    width: 40%;
    height: 100%;
  }
  .right {
    width: 30%;
    height: 100%;
    border-radius: 0 30px 30px 0;
    background-color: #ff6e31;
    cursor: pointer;
  }
`;

const Counter = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <CounterStyled className=" d-flex ">
      <div
        className="left d-flex justify-content-center align-items-center"
        onClick={() => {
          dispatch(detQuantity({ id: id, operator: "minus" }));
        }}
      >
        -
      </div>
      <div className="middle d-flex justify-content-center align-items-center">
        {quantity}
      </div>
      <div
        className="right d-flex justify-content-center align-items-center"
        onClick={() => {
          dispatch(detQuantity({ id: id, operator: "add" }));
        }}
      >
        +
      </div>
    </CounterStyled>
  );
};

export default Counter;
