import styled from "styled-components";
import Header from "../Components/Header";
import Table from "react-bootstrap/Table";
import "react-toastify/dist/ReactToastify.css";
import {
  Bag,
  BarChartLine,
  Chat,
  ChatDots,
  Pencil,
  PersonBadge,
  Tag,
  Trash,
} from "react-bootstrap-icons";
import s1 from "../Images/s1.png";
import CartCard from "../Cart/CartCard";
import { useNavigate } from "react-router-dom";

export const OneProdStyled = styled.section`
  height: 100vh;
  width: 100vw;
`;

export const OneProdCover = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 10px;
  background: linear-gradient(to top, #0a2647, #0a2647);
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
      width: 15%;
      height: 100%;
      /* background-color: #212a3e; */
      .manageItem {
        height: 60px;
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
        background-color: #212a3e;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          background-color: #ffe77d;
          color: black;
        }
        svg {
          transform: scale(150%);
          margin-left: 20px;
        }
        label {
          margin-left: 20px;
        }
      }
    }

    .middle-div {
      width: 75%;
      height: 100%;
      /* background-color: red; */
    }
  }
`;

const Products = () => {
  const navigation = useNavigate();

  const goTo = (link) => {
    navigation(`/${link}`);
  };

  return (
    <OneProdStyled className="d-flex justify-content-center align-items-center">
      <OneProdCover className="d-flex justify-content-center align-items-center">
        <FinalLayer>
          <Header />
          <MainDiv className=" d-flex justify-content-center">
            <div className="main-cover d-flex flex-column flex-md-row justify-content-around">
              <div className="left-div text-white">
                <p>Manage Listings</p>
                <div
                  className="manageItem d-flex align-items-center"
                  onClick={() => {
                    goTo("admin");
                  }}
                >
                  <BarChartLine /> <label>Dashboard</label>
                </div>
                <div
                  className="manageItem d-flex align-items-center"
                  onClick={() => {
                    goTo("products");
                  }}
                >
                  <Tag /> <label>Products</label>
                </div>
                <div
                  className="manageItem d-flex align-items-center"
                  onClick={() => {
                    goTo("orders");
                  }}
                >
                  <Bag /> <label>Orders</label>
                </div>
                <div
                  className="manageItem d-flex align-items-center"
                  onClick={() => {
                    goTo("customers");
                  }}
                >
                  <PersonBadge /> <label>Customers</label>
                </div>
                <div
                  className="manageItem d-flex align-items-center"
                  onClick={() => {
                    goTo("reviews");
                  }}
                >
                  <Chat /> <label>Reviews</label>
                </div>
                <div
                  className="manageItem d-flex align-items-center"
                  onClick={() => {
                    goTo("chats");
                  }}
                >
                  <ChatDots /> <label>Messages</label>
                </div>
              </div>

              <div className="middle-div text-white">
                <h6 className="mt-3 ">Products</h6>
                <Table className="text-white">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Color</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <CartCard name="Nike" image={s1} />
                      </td>
                      <td>White</td>
                      <td>R 2600</td>
                      <td>200</td>
                      <td>
                        <Pencil />
                      </td>
                      <td>
                        <Trash />
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <CartCard name="Nike" image={s1} />
                      </td>
                      <td>White</td>
                      <td>R 2600</td>
                      <td>200</td>
                      <td>
                        <Pencil />
                      </td>
                      <td>
                        <Trash />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </MainDiv>
        </FinalLayer>
      </OneProdCover>
    </OneProdStyled>
  );
};

export default Products;
