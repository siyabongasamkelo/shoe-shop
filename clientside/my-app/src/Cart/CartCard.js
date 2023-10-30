import styled from "styled-components";

export const CartCardStyled = styled.div`
  height: 60px;
  width: 240px;
  .pic {
    width: 45%;
    height: 100%;
    img {
      height: 60px;
      width: 60px;
    }
  }
  .name {
    width: 45%;
    height: 100%;
    div {
      p {
        /* line-height: 2px; */
        font-size: 12px;
      }
    }
  }
  @media (max-width: 480px) {
    /* background-color: red; */
    width: 70px;
  }
`;

const CartCard = ({ image, name }) => {
  return (
    <CartCardStyled className=" d-flex justify-content-between">
      <div className="pic d-flex justify-content-center align-items-center">
        <img src={image} alt="sheos" />
      </div>
      <div className="name d-none d-md-flex align-items-md-center">
        <div>
          {name}
          <p>White</p>
        </div>
      </div>
    </CartCardStyled>
  );
};

export default CartCard;
