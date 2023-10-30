import styled from "styled-components";

export const ItemCompstyled = styled.div`
  .item-comp {
    height: 350px;
    width: 300px;
    /* these are the new challenges*/
    margin-top: 60px;
    margin-left: 20px;
  }
  .item-pic {
    height: 70%;
    /* background-color: #f29200; */
    border-radius: 10px;
    img {
      height: 100%;
    }
  }
  .item-details {
    h4 {
      margin-top: 10%;
    }
    h5 {
      font-weight: 200;
      margin: 5% 0 5% 0;
    }
    .cr {
      height: 30px;
      width: 70px;
      border-radius: 30px;
      background-color: #f29200;
    }
    .cs {
      height: 30px;
      width: 110px;
      border-radius: 30px;
      /* background-color: #cd0161; */
      .c {
        height: 10px;
        aspect-ratio: 1 / 1;
        border-radius: 40%;
        background-color: #f29200;
      }
    }
  }
  @media (max-width: 480px) {
    margin-top: 60px;
  }
`;

const ItemComp = ({ color, pic }) => {
  return (
    <ItemCompstyled>
      <div className="item-comp">
        <div
          className="item-pic d-flex justify-content-center"
          style={{ backgroundColor: `${color}` }}
        >
          <img src={pic} alt="shoes" />
        </div>
        <div className="item-details">
          <h4>Nike Air</h4>
          <h5>R 3800</h5>
          <div className="color d-flex justify-content-between">
            <div className="cr d-flex justify-content-center">
              <p>colors</p>
            </div>
            <div className="cs d-flex justify-content-around align-items-center">
              <div className="c"></div>
              <div className="c"></div>
              <div className="c"></div>
              <div className="c"></div>
            </div>
          </div>
        </div>
      </div>
    </ItemCompstyled>
  );
};

export default ItemComp;
